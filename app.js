const express = require('express');
const app = express();
const jsonParser = express.json();

app.use(express.static(__dirname + '/styles'));


app.listen(5500, () => {
    console.log("Сервер запущен по адресу http://localhost:5500");
});

app.get('/', (req, res) => {
    console.log(new Date() + ": обработался запрос, GET '/'.");
    res.sendFile(__dirname + "/index.html");
  });

app.post('/', (req, res) => {
    console.log(new Date() + ": POST-запрос, объект:" + req);
    
    console.log(req.params);
    //console.log(req.json);
    if (!req.header) {
        console.log("Ошибка 400. Нет заголовка.");
        //let respjson = JSON.parse('{"status": "error", "message": "Неверный тип данных"}');
        //res.end(respjson);
        return res.sendStatus(400);
    }
    if (!req.is('application/json')) {
        console.log("Ошибка 400. Неверный тип данных.");
        //let respjson = JSON.parse('{"status": "error", "message": "Неверный тип данных"}');
        //res.end(respjson);
        return res.sendStatus(400);
    }
    //if (!req)
    //console.log(req.body);
    return;
    if (!req.body) {
        console.log("Ошибка 400. Нет тела.");
        let respjson = JSON.parse('{"status": "error", "message": "Неверный тип данных"}');
        res.end(respjson);
        return res.sendStatus(400);
    }
});