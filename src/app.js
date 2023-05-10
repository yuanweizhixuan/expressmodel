const express = require("express");
var bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.all("*", function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
	res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
	next();
});

// 签到 增加新的签到功能测试
app.post("/signin", function (req, res) {
	res.send({
		// begin_time: "Oct 22, 2021 2:56:01 PM",
		begin_time: "Oct 22, 2021 3:55:01 PM",
		status: 0,
		current_time: "Oct 22, 2021 3:56:01 PM",
	});
});


app.listen(3000, () => console.log("express 正在运行， 端口3000"));
