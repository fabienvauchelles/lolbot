'use strict';

const
    _ = require('lodash'),
    giphy = require('giphy-api')('XDOD2vMszMxfSwCAagJVB0sbodF7O0p7');


const after = [
    'Bon, tu vas la balancer ?',
    'C\'est pas mal non ?',
    'Tu kiffes ?',
    'Ahah!',
    'ahahahahahahahahaahahahahah',
    'Et bam'
];



class Talk {
    constructor(slack, message) {
        this._slack = slack;
        this._message = message;
    }


    answer() {
        throw new Error('Unimplemented');
        return false;
    }


    simple(data) {
        this._simpleImpl(data);

        if (Math.random() < .3) {
            return;
        }

        const delay = 4000 + Math.round(Math.random() * 10000);

        setTimeout(() => {
            if (Math.random() > .5) {
                this.endingGif();
            }
            else {
                this.endingMsg();
            }
        }, delay);
    }


    _simpleImpl(data) {
        let text;
        if (_.isArray(data)) {
            text = this.rnd(data);
        }
        else {
            text = data;
        }

        const payload = {
            text,
        };

        this.postMessage(payload);
    }


    image(url) {
        const payload = {
            attachments: [{
                text: '',
                image_url: url,
            }],
        };

        this.postMessage(payload);
    }


    postMessage(payload) {
        const delay = 300 + Math.round(Math.random() * 2000);

        setTimeout(() => {
            this._slack.postMessage(this._message.channel, payload);
        }, delay);
    }


    get text() {
        return this._message.text;
    }


    rnd(arr) {
        if (!arr) {
            return;
        }

        return arr[Math.floor(Math.random() * arr.length)];
    }


    get name() {
        return this._message.user.profile.display_name;
    }


    endingMsg() {
        this._simpleImpl(after);
    }


    endingGif() {
        giphy.search({
            q: this.rnd(['dance', 'yo', 'fun', 'joyce']),
            limit: 1,
        }, (err, res) => {
            if (err) {
                console.log('Error:', err);
                return;
            }

            const url = `https://i.giphy.com/${res.data[0].id}.gif`;

            this.image(url);
        });

        return true;

    }
}


////////////

module.exports = Talk;