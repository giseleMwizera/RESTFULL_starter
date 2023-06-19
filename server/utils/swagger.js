const { version } = require("../package.json");
const swaggerJSDoc = require("swagger-jsdoc");
const log = require("./logger");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "VTMS DOCS",
      version,
    },
    components: {
      securitySchemas: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      security: [
        {
          bearerAuth: [],
        },
      ],
    },
  },
  apis: [
    "../routes/api/auth.routes.js",
    "../routes/api/car.routes.js",
      "../routes/api/owner.routes.js",
    "../server.js"
  ],
};

const swaggerSpec = swaggerJSDoc(options);

// Swagger page

//  log.info(`Docs available at http://localhost:${port}/docs`);

module.exports = swaggerSpec;
