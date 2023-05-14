import express from 'express';
import { Logger } from '../logger';
import copyDotFile from '../controllers/backupOps/copyDotFile';
import getVSCodeExt from '../controllers/backupOps/getVSCodeExt';

const backupOp = express.Router();
const log = new Logger().getLogger();

function infoLogMiddleWare(req: any, res: any, next: () => void) {
  log.info('this is middle ware for backupOp route ');
  next();
}

backupOp.use(infoLogMiddleWare);
backupOp.post('/backupOp/getVsCodeExt', getVSCodeExt);
backupOp.post('/backupOp/copyDotFile', copyDotFile);

export default backupOp;
