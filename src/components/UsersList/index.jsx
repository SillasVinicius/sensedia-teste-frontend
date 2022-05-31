import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { Container, InputSearch, TableUsersWrapper, Title } from "./styles";

const columns = [
  { id: "action", label: "AÇÃO", minWidth: 170 },
  { id: "username", label: "USERNAME", minWidth: 170 },
  { id: "name", label: "NAME", minWidth: 170 },
  { id: "email", label: "E-MAIL", minWidth: 170 },
  { id: "city", label: "CIDADE", minWidth: 170 },
  { id: "daysOfWeek", label: "DIAS DA SEMANA", minWidth: 170 },
  { id: "posts", label: "POSTS", minWidth: 70 },
  { id: "albums", label: "ÁLBUNS", minWidth: 70 },
];

export default function UsersList() {
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("Carregando Informações");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function daysWeek() {
    const daysWeekOptions = [
      "Todos",
      "Sab, Dom",
      "Seg, Ter, Quar, Qui",
      "Ter, Qui",
      "Sex, Sab",
    ];
    return daysWeekOptions[getRandomInt(0, 4)];
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  useEffect(() => {
    async function fetchMyAPI() {
      let usersPromises = [];
      let posts = [];
      let albums = [];
      let userFinal = [];

      const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

      await fetch(
        "https://626bd539e5274e6664d24112.mockapi.io/front-test/v1/user"
      )
        .then((response) => response.json())
        .then((jsonArray) => {
          if (Array.isArray(jsonArray)) {
            jsonArray.forEach((user) => {
              if (user.blocked === false) {
                user.daysOfWeek = daysWeek();
                usersPromises.push(user);
              }
            });
          }
        })
        .catch((err) => console.log("Erro de solicitação", err));

      setMessage("Carregando posts dos usuários");
      let contPosts = 1;
      for (const up of usersPromises) {
        await sleep(1000);

        const urlPosts = `https://626bd539e5274e6664d24112.mockapi.io/front-test/v1/user/${up.id}/posts`;
        console.log("fetching url", urlPosts);
        const response = await fetch(urlPosts);
        const value = await response.json();
        setMessage(
          `Carregando posts dos usuários - ${contPosts}/${usersPromises.length}`
        );
        contPosts++;
        posts.push({
          userId: up.id,
          postsQtd: Array.isArray(value) ? value.length : 0,
        });
      }

      setMessage("Carregando álbuns dos usuários");
      let contAlbums = 1;
      for (const up of usersPromises) {
        await sleep(1000);

        const urlAlbums = `https://626bd539e5274e6664d24112.mockapi.io/front-test/v1/user/${up.id}/albums`;
        console.log("fetching url", urlAlbums);
        const response = await fetch(urlAlbums);
        const value = await response.json();
        setMessage(
          `Carregando álbuns dos usuários - ${contAlbums}/${usersPromises.length}`
        );
        contAlbums++;
        albums.push({
          userId: up.id,
          albumsQtd: Array.isArray(value) ? value.length : 0,
        });
      }

      for (const up of usersPromises) {
        let uf = JSON.parse(JSON.stringify(up));
        const filtredPosts = posts.filter((p) => filterByID(p, up.id));
        const filtredAlbums = albums.filter((p) => filterByID(p, up.id));

        uf.posts = Array.isArray(filtredPosts) ? filtredPosts[0].postsQtd : 0;
        uf.albums = Array.isArray(filtredAlbums)
          ? filtredAlbums[0].albumsQtd
          : 0;

        userFinal.push(uf);
      }

      console.log(userFinal);
      setRows(userFinal);

      setIsLoading(false);
    }

    fetchMyAPI();
  }, []);

  function filterByID(obj, uid) {
    if (
      "userId" in obj &&
      typeof obj.userId === "string" &&
      !isNaN(obj.userId)
    ) {
      if (obj.userId === uid) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  function filterUserByID(obj, uid) {
    if ("id" in obj && typeof obj.id === "string" && !isNaN(obj.id)) {
      if (obj.id !== uid) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  function deleteUser(user) {
    var result = window.confirm(
      `Deseja realmente excluir o usuário ${user.username}?`
    );
    if (result) {
      if (user) {
        let users = JSON.parse(JSON.stringify(rows));
        let newUser = JSON.parse(JSON.stringify(user));
        newUser.blocked = true;
        delete newUser.daysOfWeek;
        delete newUser.posts;
        delete newUser.albums;

        const requestOptions = {
          method: "PUT",
          headers: { "Content-Type": "application/json; charset=UTF-8" },
          body: JSON.stringify(newUser),
        };

        fetch(
          `https://626bd539e5274e6664d24112.mockapi.io/front-test/v1/user/${user.id}`,
          requestOptions
        )
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((err) => console.log(err));

        const filteredUsers = users.filter((u) =>
          filterUserByID(u, newUser.id)
        );
        setRows(filteredUsers);
      }
    }
  }

  return (
    <Container>
      <Title>Usuários</Title>
      <InputSearch placeholder="Search" />
      <TableUsersWrapper>
        {isLoading ? (
          <div>{message}</div>
        ) : (
          <>
            <TableContainer sx={{ height: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.id}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];
                            if (column.id === "action") {
                              return (
                                <TableCell key={column.id} align={column.align}>
                                  <Button
                                    variant="outlined"
                                    color="error"
                                    startIcon={<DeleteIcon />}
                                    onClick={(e) => deleteUser(row)}
                                  >
                                    Excluir
                                  </Button>
                                </TableCell>
                              );
                            } else {
                              return (
                                <TableCell key={column.id} align={column.align}>
                                  {column.format && typeof value === "number"
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                              );
                            }
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </>
        )}
      </TableUsersWrapper>
    </Container>
  );
}
