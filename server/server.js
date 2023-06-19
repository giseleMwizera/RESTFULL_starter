require("dotenv").config();
const express = require("express");
const cors = require("cors");
const verifyJWT = require("./middleware/verifyJWT");
const cookieParser = require("cookie-parser");
const credentials = require("./middleware/credentials");
const corsOptions = require("./config/corsOption");
const { logger } = require("./middleware/logEvents");
const errHandler = require("./middleware/errorHandler");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

const app = express();

const PORT = process.env.PORT || 3500;

connectDB();

app.use(credentials);
app.use(cors(corsOptions));

app.use(logger);
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

// middleware for cookies
app.use(cookieParser());

app.use("/auth", require("./routes/api/auth.routes"));
app.use("/refresh", require("./routes/refresh"));

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(verifyJWT);


app.use("/owners", require("./routes/api/owner.routes"));

app.use("/cars", require("./routes/api/car.routes"));

app.use(errHandler);
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
