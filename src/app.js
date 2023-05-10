/*
 * @Author: QIXIU
 * @Description: Do not edit
 * @Date: 2023-05-10 16:10:40
 * @LastEditTime: 2023-05-10 16:11:15
 */
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

app.listen(3000, () => console.log("express 正在运行， 端口3000"));
