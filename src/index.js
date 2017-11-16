'use strict';

const
    Slack = require('./common/slack');

const
    config = require('./config');



const talks = [
    require('./common/talk/push'),

    require('./common/talk/contrepetrie'),
    require('./common/talk/melonmeleche'),
    require('./common/talk/excuse'),
    require('./common/talk/smalltalk'),
];


const slack = new Slack(config.slack);

slack.on('message', (msg) => {
    for (let i = 0; i < talks.length; ++i) {
        const Talk = talks[i],
            talk = new Talk(slack, msg);

        if (talk.answer()) {
            break;
        }
    }
});

slack.start();
