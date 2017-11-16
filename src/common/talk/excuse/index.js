'use strict';

const
    fs = require('fs'),
    path = require('path');


const
    Talk = require('..');


const prefixes = [
    'Atta atta, j\'en ai une :',
    'Et voilà ! Tu peux lui balancer ça :',
    'Celle là est pas mal:',
    'Et:',
    'Tu peux foncer sur ça:'
];




const data = fs.readFileSync(
    path.join(__dirname, 'excuses.txt')
),
    excuses = data.toString().split('\n');


class Excuses extends Talk {
    constructor(slack, message) {
        super(slack, message);


    }


    answer() {
        if (this.text.match(/excuse|dsl|oups|mince/)) {
            const
                prefix = this.rnd(prefixes),
                excuse = this.rnd(excuses);

            this.simple(`${prefix}\n${excuse}`);

            return true
        }

        return false;
    }
}


////////////

module.exports = Excuses;