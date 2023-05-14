import { RequestHandler } from 'express';
import { AppDataSource } from '../../data-source';
import { DotFileCopyFromToMap } from '../../entities/DotFileCopyFromToMap';
import { isNil } from 'ramda';
import fs from 'fs';
import { Logger } from '../../logger';

/**
 * Health check endpoint
 */
const copyDotFile: RequestHandler = async (req, res) => {
  const log = new Logger();

  const dotPaths = await AppDataSource.getRepository(DotFileCopyFromToMap)
    .createQueryBuilder('dot')
    .select(['dot.fromPath', 'dot.toPath'])
    .getMany();

  const dotPathList = dotPaths.map((path) => {
    return {
      fromPath: path.fromPath,
      toPath: path.toPath,
    };
  });

  log.debug('dotPathList', { dotPathList });

  dotPathList.forEach((path) => {
    const { fromPath, toPath } = path;
    if (isNil(fromPath) || isNil(toPath)) {
      throw new Error(`from or to is null, not able to copy file`);
    }
    fs.copyFileSync(fromPath, toPath);
  });
  res.status(200).json({
    result: 'success',
  });
};
export default copyDotFile;
