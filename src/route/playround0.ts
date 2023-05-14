import express from 'express';
import { Logger } from '../logger';
import { createNotification } from '../controllers/playground0/createNotification';

const playgounrd0 = express.Router();
const log = new Logger().getLogger();

function infoLogMiddleWare(req: any, res: any, next: () => void) {
  log.info('this is middle ware for playgounrd0 route ');
  next();
}

playgounrd0.use(infoLogMiddleWare);
playgounrd0.post('/create-notification', createNotification);

export default playgounrd0;
