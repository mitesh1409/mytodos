import express from 'express';

import * as usersController from '../controllers/users.controller.js';
import { authenticate } from '../middlewares/authenticate.js';

const usersRouter = express.Router();

usersRouter.get('/signup', usersController.showSignupForm);
usersRouter.post('/signup', usersController.signup);
usersRouter.get('/signin', usersController.showSignInForm);
usersRouter.post('/signin', usersController.signin);
usersRouter.get('/dashboard', authenticate, usersController.showDashboard);

export {
    usersRouter
};
