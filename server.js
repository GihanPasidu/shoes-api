const jsonServer = require("json-server");
const app1 = jsonServer.create();
const app2 = jsonServer.create();
const router1 = jsonServer.router("db.json");
const router2 = jsonServer.router("user.json");
const middlewares = jsonServer.defaults();

app1.use(middlewares);
app1.use(router1);
app2.use(middlewares);
app2.use(router2);

const PORT1 = process.env.PORT || 5000;
const PORT2 = 5001;

app1.listen(PORT1, () => {
  console.log(`DB Server running on port ${PORT1}`);
});

app2.listen(PORT2, () => {
  console.log(`User Server running on port ${PORT2}`);
});
