const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults({
  static: './build',
});
const PORT = 5000;
const users = router.db.get("users");

server.use(jsonServer.bodyParser)
server.use(middlewares);


const getRandomToken = (length) => {
  if (length === undefined || length <= 0) {
    length = 1;
  }
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  let first = 0;
  for (let i = 0; i < length; i++) {
    if (i === 0) {
      first = 10;
    } else {
      first = 0;
    }
    result +=
      characters[Math.round(Math.random() * (characters.length - first - 1))];
  }
  return result;
};

//Авторизация
server.post("/auth", (req, res) => {
<<<<<<< HEAD
  const { login, password } = req.params;
  const authUser = users.toJSON().find(
          (user) => user.login === login && user.password === password
      );
  if (authUser) {
    res.json({ ...authUser});
  } else {
    res.status(404).json({ message: "Ошибка авторизации" });
=======
  const { login, password } = req.body;
  const authUser = users.toJSON().find(
      (user) => user.login === login && user.password === password
    );
  if (authUser) {
    const {id, login, token} = authUser;
    res.json({id, login, token});
  } else {
    res.status(401).json({ message: "Ошибка авторизации" });
>>>>>>> 7d308bfe83d0c921abf1a55fe80798d10d68a0f8
  }
});


//Регистрация
server.post("/registration", (req, res, next) => {
  const defaultDate = {
    phone: null,
    address: null,
    avatar: null,
    token: getRandomToken(100),
  };
  const loginCheck = users.some(
    (user) => user.login === req.body.login
  );
  if (
    req.body.login === undefined ||
    req.body.password === undefined ||
    req.body.email === undefined
  ) {
    res.status(400);
    res.send();
  } else if (loginCheck.toJSON()) {
    res.status(400).json({error: "Такой логин уже существует"});
    res.send();
  }
  req.body = { ...req.body, ...defaultDate };
  next();
});

server.use(router);
server.listen(PORT, () => {
  console.log(`JSON Server is running on ${PORT}`);
});