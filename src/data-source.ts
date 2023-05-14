import { DataSource } from 'typeorm';
import { DotFileCopyFromToMap } from './entities/DotFileCopyFromToMap';
import config from 'config';

const port = config.get('pg.connect.port') as number;
const host = config.get('pg.connect.host') as string;
const database = config.get('pg.connect.database') as string;
const username = config.get('pg.auth.username') as string;
const password = config.get('pg.auth.password') as string;
const synchronize = config.get('pg.setting.synchronize') as boolean;
const logging = config.get('pg.setting.logging') as boolean;

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: host,
  port: port,
  username: username,
  password: password,
  database: database,
  synchronize: synchronize,
  logging: logging,
  entities: [DotFileCopyFromToMap],
  subscribers: [],
  migrations: ['src/migration'],
});
