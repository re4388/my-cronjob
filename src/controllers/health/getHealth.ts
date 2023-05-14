import { RequestHandler } from 'express';
import config from '../../config';

/**
 * Health check endpoint
 */
const getHealth: RequestHandler = (req, res) => {
  console.log(req.query);
  res.status(200).json({
    name: config.name,
    description: config.description,
    version: config.version,
  });
};
export default getHealth;
