import * as authService from '../services/auth.js';

function authenticate(req, res, next) {
    const jwtToken = req.cookies.token;

    if (!jwtToken) {
        return res.redirect('/users/signin');
    }

    const user = authService.getUser(jwtToken);
    if (!user) {
        return res.redirect('/users/signin');
    }

    req.user = user;
    next();
}

export {
    authenticate
};
