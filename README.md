### Проект: помощник мэрии

Общая суть: сайт, на котором жители города могут пожелания/замечания по улучшению благосостояния улиц. Каждое пожелание будет наноситься на карту.

### Гость

Неавторизованные пользователи могут видеть список пожеланий. Доступны два вида просмотра: просмотреть как список – просмотреть на карте.

При открытии пожелания гость видит описание пожелания, дату, фотографию и адрес, к которому пожелание относится. У пожелания могут быть положительные и отрицательные оценки.

### Зарегистрированный пользователь имеет весь функционал гостя, плюс может оставлять свои пожелания и ставить оценки.

### Администратор может менять статус пожеланий на "выполняется" или "выполнено", а также удалить конкретное пожелание.





| Адрес        | Назначение           | Обязательные значения  |
| ------------- |:-------------:| -----:|
| POST /auth     | Авторизация  | login(string) password(string) |
| POST /checkIn      | Регистрация      |   login(string) password(string) name(string) surname(string) email(string) |
| GET /users         | Получение оценок пользователей|
| GET /rating        | Получение списка пожеланий     |
| POST /rating/:id       | Добавление рейтинга       | userId(number))| 
|DELETE /users/id | Удаление пользователя по ID|
|GET /street | Получение списка улиц |
|GET /appeals | Получение пожеланий | 
|DELETE /appeals/id | Удаление пожеланий по ID|