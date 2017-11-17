'use strict';

const
    _ = require('lodash'),
    Apiai = require('apiai');

const
    Talk = require('..');

const
    config = require('../../../config');


class Fallback extends Talk {
    constructor(slack, message) {
        super(slack, message);

        this._app = Apiai(config.apiai.token);

    }


    answer() {
        const request = this._app.textRequest(this.text, {
            sessionId: Math.floor(Math.random() * 100000000000).toString(),
        });

        request.on('response', (res) => {
            const text = _.get(res, 'result.fulfillment.messages[0].speech');
            if (text) {
                this.simple(text);
            }
        });

        request.on('error', (err) => {
            console.log('Error:', err);
        });

        request.end();


        return true;
    }
}


////////////

module.exports = Fallback;