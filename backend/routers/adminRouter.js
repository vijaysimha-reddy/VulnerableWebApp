import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/userModel';
import { generateToken, isAuth } from '../utils';

const adminRouter = express.Router();
adminRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
  	console.log("hi")
    try {
      const user = new User({
        name: 'admin',
        email: 'admin@example.com',
        password: 'admin',
        isAdmin: true,
      });
      const createdUser = await user.save();
      res.send(createdUser);
    } catch (err) {
    	const user = new User({
        name: 'admin',
        email: 'admin@example.com',
        password: 'admin',
        isAdmin: true,
      });
      res.status(200).send(user);
    }
  })
);

export default adminRouter