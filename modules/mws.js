/*
 *  Module: mws.js
 *  Performs following functions:
 *  test
 */


/*
 * Module dependencies ()
 */

var
// JavaScript implementations of standard and secure cryptographic algorithms.
crypto              			= require('crypto'),

// Generates secure random numbers using crypto.randomBytes().
// Numbers can be of any magnitude and in any base from 2 to 36.
rand                			= require('csprng'),


// A node.js package for Steven Levithan's excellent dateFormat() function.
date_format         			= require('dateformat'),

// Send e-mails from Node.js – easy as cake! https://nodemailer.com/
nodemailer          			= require('nodemailer'),

// Node.js module for rendering beautiful emails with ejs, pug, swig, hbs, jade
// or handlebars templates and email-friendly inline CSS using juice
email_template      			= require('email-templates').EmailTemplate,

// manage paths
path                			= require('path'),
// create instance of nodemailer to sent email to conernnig email addresses
transporter 					= nodemailer.createTransport(process.env.nodemailer),

// eventEmitter, the dependencey on module auth.js
event_emitter					= require('events').EventEmitter,

// async, the dependencey on module auth.js
async							= require('async');


/*
 *  Method: Login
 *  Params: data (Takes user's credential and perform required action to authenticate user)
 *  callback: Function will call this callback on success and failure
 */

exports.test = function(data,callback) {
    
    // test API

    callback({status: 'error', errors: [{
        param: "test",
        msg: "Request has been received!",
        value: "test",
        type: "test"
       }]
    });

};
