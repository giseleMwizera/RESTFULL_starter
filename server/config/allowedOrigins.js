const allowedOrigins = [
  "https://google.com",
  "http://127.0.0.1:550",
  "http://localhost:3000",
  "http://localhost:4000",
  `http://localhost:${process.env.PORT}`,
];

module.exports = allowedOrigins;
