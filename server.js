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

// //Авторизация
// server.post("/auth", (req, res) => {
//   const { login, password } = req.body;
//   const authUser = users
//     .toJSON()
//     .find(
//       (user) =>
//         user.login === login && user.password === password
//     );
//   if (authUser !== undefined) {
//     res.status(404).json({ message: "Ошибка авторизации" });
//   } else {
//     res.json({ ...authUser});
//   }
// });


//Регистрация
server.post("/users", (req, res, next) => {
  const defaultDate = {
    phone: null,
    address: null,
    token: randomToken(100),
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


server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
  console.log(`JSON Server is running on ${PORT}`);
});