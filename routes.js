import clientRoutes from './client/index.js';
import userRouter from './api/user/index.js'

export default function (app) {
  app.use('/', clientRoutes);
  app.use('/client', clientRoutes);
  app.use('/api/users', userRouter);
}
