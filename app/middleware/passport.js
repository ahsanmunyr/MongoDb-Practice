"use strict";
const _ = require("lodash");
const passport = require("passport");
const axios = require('axios');
const { OAuth2Strategy } = require('passport-google-oauth');
const GOOGLE_CLIENT_ID = "896520258119-jdsrq8i02787p5e05dqr46sk5g2pdrbh.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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"
const config = require("config");
const { findOne, create, User } = require("../service/user.service");

passport.use(new OAuth2Strategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: config.get("g-callback")
},
    function (accessToken, refreshToken, profile, done) {
        findOne({ email: profile._json.email })
            .then(user => {
                let data;
                if (!user) {
                    const userData = {
                        email: profile._json.email,
                        username: profile._json.name,
                        profilePic: profile._json.picture,
                    }
                    // CREATE NEW USER
                    data = {
                        existing: false,
                        user: userData,
                        // next: `${config.get("origin")}/social/register`
                    }
                } else {
                    data = {
                        existing: true,
                        user: user,
                        // next: `${config.get("origin")}/api/users/verify`
                    }
                }
                return done(null, data);
            }).catch((err) => console.log(err, "errorr"))
    }));

module.exports = passport