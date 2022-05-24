const express = require('express');
const req = require('express/lib/request');
const app = express();
//const jsonParser = express.json();

app.use(express.static(__dirname + '/styles'));
const urlencodedParser = express.urlencoded({extended: false});

app.listen(5500, () => {
    console.log("Сервер запущен по адресу http://localhost:5500");
});

//app.get('/', (req, res) => {
//    console.log(new Date() + ": обработался запрос, GET '/'.");
//    res.sendFile(__dirname + "/index.html");
//  });

app.post('/reqres', urlencodedParser, (request, res) => {
    console.log(new Date() + ": POST-запрос, объект:" + request);

    if(!request.body) 
    {
        let js = {
            status: "Error 400",
            message: "Неверный тип данных"
        };
        res.send(js);
        return;
    }
   
    console.log(request.body);
    
    let JSON = {
        status: "ok",
        data: request.body
    };
    res.send(JSON);

});