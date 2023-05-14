// eslint-disable-next-line no-console
import { Logger } from './logger';
import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { AppDataSource } from './data-source';
import { DotFileCopyFromToMap } from './entities/DotFileCopyFromToMap';
import { isNil } from 'ramda';
import health from './route/health';
import playgounrd0 from './route/playround0';

import 'reflect-metadata';
import backupOp from './route/backupOps';

const log = new Logger().getLogger();
log.info('first line:: begin to run.....');

const app: Express = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

async function initializeDataSource() {
  try {
    const dataSource = await AppDataSource.initialize();
    const dotRepository = dataSource.getRepository(DotFileCopyFromToMap);
    const res = await dotRepository.query('SELECT 1');
    if (!isNil(res)) {
      log.info('db is connected');
    }
  } catch (e) {
    log.error('Cannot get. DB Error: ', e);
  }
}

initializeDataSource().catch((error) =>
  log.error('Cannot get. DB Error: ', error)
);

app.use('/', health);
app.use('/', backupOp);
app.use('/', playgounrd0);

app.listen(3111, async () => {
  log.info('Server is running at http://localhost:3111');
});
