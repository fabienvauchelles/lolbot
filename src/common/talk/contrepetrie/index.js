'use strict';

const
    fs = require('fs'),
    path = require('path');


const
    Talk = require('..');



const data = fs.readFileSync(
    path.join(__dirname, 'contrepetries.txt')
),
    ctps = data.toString().split('\n');


class Contrepetries extends Talk {
    constructor(slack, message) {
        super(slack, message);


    }


    answer() {
        if (this.text.match(/contre|pétrie|anagrame|mots/)) {
            const ctp = this.rnd(ctps);

            this.simple(ctp);

            return true
        }

        return false;
    }
}


////////////

module.exports = Contrepetries;