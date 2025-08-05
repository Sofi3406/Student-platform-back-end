// src/config/swagger.js
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Student Platform Backend API',
      version: '1.0.0',
      description: 'API documentation for the Student Platform backend',
    },
    servers: [
      {
        url: 'http://localhost:5000/api/v1',
        description: 'Development server',
      },
    ],
  },
  apis: ['./src/routes/*.js'], // path to route files with JSDoc
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
