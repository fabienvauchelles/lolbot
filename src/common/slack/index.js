'use strict';

const
    _ = require('lodash'),
    Promise = require('bluebird'),
    EventEmitter = require('events'),
    SlackClient = require('@slack/client');


class Slack extends EventEmitter {
    constructor(config) {
        super();


        this._web = new SlackClient.WebClient(config.token);

        this._rtm = new SlackClient.RtmClient(config.token, {autoReconnect: true});
        this._rtm.on(SlackClient.RTM_EVENTS.MESSAGE, (message) => {
            message.user = this._rtm.dataStore.getUserById(message.user);

            if (message.user.is_bot) {
                return;
            }

            this._onMessage(message);
        });
    }


    start() {
        this._rtm.start();

        this.emit('start');
    }



    postMessage(channel, answer) {
        return new Promise((resolve, reject) => {
            const payload = _.merge({
                as_user: true,
            }, answer);

            this._web.chat.postMessage(channel, void 0, payload, (err, res) => {
                if (err) {
                    return reject(err);
                }

                return resolve(res);
            });
        });
    }


    _onMessage(message) {
        this.emit('message', message);
    }
}


////////////

module.exports = Slack;
