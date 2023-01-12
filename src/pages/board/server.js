/**
 
    npm install express http cors body-parser axios
    node server

    endpoint
    localhost:3001

    get /board
        전체 리스트
    
    get /board?no=${글번호}
        글 조회

    post /board
        글작성
        {
            writer: string;
            title: string;
            content: string;
        }

    put /board
        글수정
        {
            writer: string;
            title: string;
            content: string;
            no: number;
        }

    delete /board?no=${글번호}
        글삭제

    interface Board {
        writer: string;
        title: string;
        content: string;
        regtime: string;
        no: number;
    }

 */

const express = require("express"),
  http = require("http"),
  cors = require("cors"),
  bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = {
  count: 0,
  items: [],
  sequence: (function () {
    let result = 1;
    return function () {
      return result++;
    };
  })(),
};

app.set("port", 3001);

app.get("/board", function (req, res) {
  let result = db.items;
  if (req.query.no) {
    for (let obj of db.items) {
      if (req.query.no == obj.no) {
        result = obj;
        break;
      }
    }
  }
  res.send({
    board: result,
  });
});

app.post("/board", function (req, res) {
  db.items.push({
    writer: req.body.writer,
    title: req.body.title,
    content: req.body.content,
    regtime: new Date(),
    no: db.sequence(),
  });
  res.end();
});

app.put("/board", function (req, res) {
  for (let i = 0; i < db.items.length; i++) {
    if (db.items[i].no == req.body.no) {
      db.items[i] = req.body;
      break;
    }
  }
  res.end();
});

app.delete("/board", function (req, res) {
  db.items = db.items.filter((item) => {
    return item.no != req.query.no;
  });
  res.end();
});

http.createServer(app).listen(app.get("port"), function () {
  console.log("start");
});
