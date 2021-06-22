const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const PORT = 8000;
const users = router.db.get("users");
const streets = router.db.get("streets");

const randomToken = () => {
  let randomString = ''
  const characters = '1234567890QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm'
  for (let i = 0; i < characters.length; i++) {
    randomString += characters[getRandom(0, characters.length - 1)]
  }
}
const getRandom = (min, max) => {
  return Math.floor(Math.random() * max - min + 1) + min
}

//Авторизация
server.post("/auth", (req, res) => {
  const { login, password } = req.body;
  const authUser = users
    .toJSON()
    .find(
      (user) =>
        user.login === login && user.password === password
    );
  if (authUser === undefined) {
    res.status(404).json({ message: "Ошибка авторизации" });
  } else {
    res.json({ ...authUser, password: null });
  }
});

server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
  console.log(`JSON Server is running on ${PORT}`);
});