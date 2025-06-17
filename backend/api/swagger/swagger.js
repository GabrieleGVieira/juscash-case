// swagger.js
import swaggerJSDoc from 'swagger-jsdoc';
import { serve, setup } from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Minha API',
      version: '1.0.0',
      description: 'Documentação da API usando Swagger',
    },
  },
  apis: ['./routes/*.js'], // Caminho para os arquivos com comentários JSDoc
};

const swaggerSpec = swaggerJSDoc(options);

const setupSwagger = (app) => {
  app.use('/api-docs', serve, setup(swaggerSpec));
};

export default setupSwagger;
