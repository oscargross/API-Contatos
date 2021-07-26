import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../docs/swagger.json'

const SwaggerHost = (req : any, _ : any, next : any) => {
  req.swaggerDoc = swaggerDocument;
  next()
}

export const Swagger = (_routes: any) => {
  _routes.use('/docs', SwaggerHost, swaggerUi.serve);
  _routes.get('/docs', swaggerUi.setup(swaggerDocument));
}
