const express = require("express");
const app = express();

app.all("*", function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
	res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
	next();
});

// 登录
app.post("/signin", function (req, res) {
	res.send({
		// begin_time: "Oct 22, 2021 2:56:01 PM",
		begin_time: "Oct 22, 2021 3:55:01 PM",
		status: 1,
		current_time: "Oct 22, 2021 3:56:01 PM",
	});
});

// 登出
app.post("/signout", function (req, res) {
	res.send({
		status: 0,
	});
});

// 排行榜
app.post("/rank", function (req, res) {
	res.send({
		personal: {
			TIMELONG: 200,
			LEVELNAME: "崭露头角",
			TESTLEVEL: "2",
			DAY_NUMBER: 987,
			SEX: 1,
			STAR_NUMBER: 897,
			NICKNAME: "郑聚源",
		},
		rank: [
			{
				TIMELONG: 20,
				LEVELNAME: "崭露头角",
				TESTLEVEL: "2",
				DAY_NUMBER: 33,
				SEX: 1,
				STAR_NUMBER: 58,
				NICKNAME: "郑聚源",
			},
			{
				TIMELONG: 12,
				LEVELNAME: "渐入佳境",
				TESTLEVEL: "4",
				DAY_NUMBER: 34,
				SEX: 0,
				STAR_NUMBER: 46,
				NICKNAME: "李木木",
			},
			{
				TIMELONG: 12,
				LEVELNAME: "崭露头角",
				TESTLEVEL: "2",
				DAY_NUMBER: 33,
				SEX: 1,
				STAR_NUMBER: 46,
				NICKNAME: "刘冒欣",
			},
		],
	});
});

app.listen(3000, () => console.log("express 正在运行，端口3000"));