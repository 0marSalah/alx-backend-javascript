#!/usr/bin/node

const http = require("http");
const fs = require("fs");

const app = http
  .createServer(async (req, res) => {
    if (req.url === "/") {
      res.write("Hello Holberton School!");
      res.end();
    } else if (req.url === "/students") {
      try {
        const path = process.argv[2];
        console.log(path);
        res.write("This is the list of our students\n");
        const data = await fs.promises.readFile(path, "utf8");
        const lines = data.split("\n").filter(line => line.length > 0).slice(1);
        const fields = {};
        for (const line of lines) {
          const student = line.split(",");
          if (!fields[student[3]]) fields[student[3]] = [];
          fields[student[3]].push(student[0]);
        }
        res.write(`Number of students: ${lines.length}`);
        for (const field in fields) {
          if (field) {
            const list = fields[field].join(", ");
            res.write(
              `Number of students in ${field}: ${fields[field]
                .length}. List: ${list}`
            );
          }
        }
        res.end();
      } catch (error) {
        res.write(error.message);
      }
    }
  })
  .listen(1245);

module.exports = app;
