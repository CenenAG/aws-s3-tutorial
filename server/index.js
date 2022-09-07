const express = require("express");
const fileUpload = require("express-fileupload");
const photosRoutes = require("./photos.routes");

const app = express();

// Note that this option available for versions 1.0.0 and newer.
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/uploads",
  })
);

app.use(photosRoutes);

app.listen(3000);
console.log("server running on port 3000");
