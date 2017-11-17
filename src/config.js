'use strict';

const ENV = process.env;

module.exports = {
    slack: {
        token: ENV.SLACK_TOKEN,
    },

    apiai: {
        token: ENV.APIAI_TOKEN
    },

    giphy: {
        token: ENV.GIPHY_TOKEN,
    }
};
