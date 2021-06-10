const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const PORT = 8080;
const users = router.db.get("users");
const streets = router.db.get("streets");


//Авторизация
server.route("/auth").post((req, res) => {
  const { login, password } = req.body;
  const authUser = users.find(
    (user) => user.login === login && user.password === password
  );
  if (authUser.toJSON() === undefined) {
    res.status(404).json("Ошибка авторизации");
  }
  res.json(authUser);
});

server.route("checkIn").post((req, res) => {});


server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
  console.log(`JSON Server is running on${PORT}`);
});
