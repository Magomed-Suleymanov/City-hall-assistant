const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults({
  static: './build',
});
const PORT = 5000;
const users = router.db.get("users");
const appeals = router.db.get("appeals")
const streets = router.db.get("streets")

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
  const { login, password } = req.body;
  const authUser = users.toJSON().find(
    (user) => user.login === login && user.password === password
  );
  if (authUser) {
    const {id, login, token, firstName, roles} = authUser;
    res.json({id, login, token, firstName,roles, password: null});
  } else {
    res.status(401).json({ message: "Ошибка авторизации" });
  }
});


//Регистрация
server.post("/users", (req, res, next) => {
  const defaultDate = {
    address: null,
    roles: 'Пользователь',
    avatar: null,
    token: getRandomToken(50),
  };
  const loginCheck = users.some(
    (user) => user.login === req.body.login
  );
  if (
    req.body.login === undefined ||
    req.body.password === undefined ||
    req.body.firstName === undefined ||
    req.body.lastName === undefined ||
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



//Получение пожеланий
server.get("/appeals", (req, res) => {
  const filteredAppeals = appeals.filter((item) => item.appeal);
  if (filteredAppeals.toJSON().length === 0) {
    res.status(404).json([]);
  }
  res.json(filteredAppeals);
});


//Добавление пожеланий
// server.post("/appeals", (req, res, next) => {
//   const alfa = appeals.find(item => item.streetsId === streets.id)
//
//   if (
//     req.body.appeal === undefined
//   ) {
//     res.status(400);
//     res.send();
//   }
//   req.body.appeal = alfa;
//   next();
// });


server.use(router);
server.listen(PORT, () => {
  console.log(`JSON Server is running on ${PORT}`);
});