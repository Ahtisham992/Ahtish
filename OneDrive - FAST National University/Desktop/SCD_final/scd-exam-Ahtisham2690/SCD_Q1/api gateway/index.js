const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth/", proxy("http://http://localhost:3000"));
app.use("/api/blogs/", proxy("http://http://localhost:3001"));
app.use("/api/comments/", proxy("http://http://localhost:3002")); 
app.use("/api/profile/", proxy("http://http://localhost:3003")); 


app.listen(8000, () => {
  console.log("Gateway is Listening to Port 8000");
});