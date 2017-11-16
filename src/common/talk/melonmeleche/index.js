'use strict';

const
    fs = require('fs'),
    path = require('path');


const
    Talk = require('..');



const data = fs.readFileSync(
    path.join(__dirname, 'melonmeleche.txt')
),
    mms = data.toString().split('\n');


class Melonmeleche extends Talk {
    constructor(slack, message) {
        super(slack, message);


    }


    answer() {
        if (this.text.match(/melon|leche|lèche|sex|cul|ass|dégeu/)) {
            const
                mm = this.rnd(mms).split('|');

            this.simple(mm[0]);

            setTimeout(() => {
                this.simple(mm[1]);
            }, 4000);

            return true
        }

        return false;
    }
}


////////////

module.exports = Melonmeleche;