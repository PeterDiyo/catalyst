import logger from '#config/logger.js';
import jwt from 'jsonwebtoken';

const JWT_SECRET =
  process.env.JWT_SECRET ||
  'your-default-secret-key-please-change-in production';

const JWT_ExPIRES_IN = '1d';

export const jwttoken = {
  sign: payload => {
    try {
      return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_ExPIRES_IN });
    } catch (e) {
      logger.error('Failed to authenticate token:', e);
      throw new Error('Failed to authenticate token');
    }
  },
  verify: token => {
    try {
      return jwt.verify(token, JWT_SECRET);
    } catch (e) {
      logger.error('Invalid token:', e);
      throw new Error('Invalid token');
    }
  },
};
