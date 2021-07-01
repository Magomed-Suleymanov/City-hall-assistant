const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const PORT = 8000;
const users = router.db.get("users");
const streets = router.db.get("streets");

const getRandomToken = (length) => {
  if (length === undefined || length <= 0) {
    length = 1;
  }
  const characters =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
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

// //Авторизация
// server.get('/auth', (req, res) => {
//   const { login, password } = req.body;
//   const authUser = users
//     .toJSON()
//     .find((user) => user.login === login && user.password === password);
//   if (authUser === undefined) {
//     res.status(404).json({ message: 'Ошибка авторизации' });
//   } else {
//     res.json({ ...authUser, password: null });
//   }
// });

//Авторизация
server.get("/authorization/login=:login/password=:password", (req, res) => {
  const user = users.find((item) => item.login === req.params.login);
  const password = user.toJSON().password;
  const login = user.toJSON().login;
  return password === req.params.password && login === req.params.login
    ? res.json(user.toJSON().token)
    : res.json();
});

//Регистрация
// server.post('/users', (req, res, next) => {
//   const defaultDate = {
//     phone: null,
//     address: null,
//     token: getRandomToken(100),
//   };
//   const loginCheck = users.some((user) => user.login === req.body.login);
//   if (
//     req.body.login === undefined ||
//     req.body.password === undefined ||
//     req.body.email === undefined
//   ) {
//     res.status(400);
//     res.send();
//   } else if (loginCheck.toJSON()) {
//     res.status(400).json({ error: 'Такой логин уже существует' });
//     res.send();
//   }
//   req.body = { ...req.body, ...defaultDate };
//   next();
// });

server.use(middlewares);
server.use(router);
server.use(jsonServer.bodyParser);
server.listen(PORT, () => {
  console.log(`JSON Server is running on ${PORT}`);
});