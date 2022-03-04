const express = require('express');
const viewsRouter = express.Router();

const Views = require('./social.controller');
let views_controller = new Views()
const passport = require("../../middleware/passport");

viewsRouter.get('/',
    views_controller.index
);

viewsRouter.get('/signin',
    views_controller.login
);

viewsRouter.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

viewsRouter.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/api/social/auth/error' }),
    views_controller.social_callback
);

viewsRouter.get('/*',
    views_controller.not_found
);

module.exports = viewsRouter;