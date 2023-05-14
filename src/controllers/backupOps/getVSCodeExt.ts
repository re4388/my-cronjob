import { RequestHandler } from 'express';
import fs from 'fs';
import { spawn } from 'child_process';
import { Logger } from '../../logger';

const getVSCodeExt: RequestHandler = async (req, res) => {
  const logger = new Logger();

  // TODO: shall be way better method to handle this, no need to use stream
  const writeStream = fs.createWriteStream('./output.txt');
  const processWithoutNullStreams = spawn('code', ['--list-extensions']);

  processWithoutNullStreams.stdout.on('data', (data: any) => {
    writeStream.write(`${data}`);
  });

  processWithoutNullStreams.stderr.on('data', (data: any) => {
    console.error(`stderr: ${data}`);
  });

  processWithoutNullStreams.on('close', (code: any) => {
    writeStream.end();
  });

  res.status(200).json({
    result: 'success',
  });
};
export default getVSCodeExt;
