import config from '../config';
import jwt, { JwtPayload } from 'jsonwebtoken';

const generateToken = (payload: JwtPayload) => {
  return jwt.sign(payload, "Jatin@123"!, { expiresIn: '2d' });
};

export default generateToken;
