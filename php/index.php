<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Главная страница</title>
    <link rel="stylesheet" type="text/css" href="css/style.css" />
  </head>
  <body>
    <?php include_once 'header.php' ?>
    <div class="wrapper">
        <div class="container">
            <h2>Мой календарь</h2>
            <?php include_once 'calendar.php' ?>
        </div>
        <hr />
        <div class="container">
            <h2>Дальше идут сайты</h2>
            <?php include_once 'main.php' ?>
        </div>
    </div>
  </body>
</html>