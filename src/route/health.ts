import express from 'express';
import { Logger } from '../logger';
import getHealth from '../controllers/health/getHealth';

const health = express.Router();
const log = new Logger().getLogger();

// middleware that is specific to this router
function infoLog(req: any, res: any, next: () => void) {
  log.info('this is healthy route');
  next();
}

health.use(infoLog);
health.get('/health', getHealth);

export default health;
