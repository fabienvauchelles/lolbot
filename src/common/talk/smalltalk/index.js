'use strict';

const
    Talk = require('..');




const exprs = [
    { r: /vilain|méchant|connard|enculé|salope|pd|asshole|bitch|moche/, t: 'achète toi un bécherelle et etouffe-toi avec|je te hais|mange du COBOL|je suis comme toi, mais en mieux|tu touches le fond|je prie pour toi'},
    { r: /lol|mdr|marrant|fun|hihi/, t: 'drole non|humour|tu kiffes?|tas pas autre chose à faire ?|fait péter la sauce coco'},
    { r: /hello|hi|salut|lo|aloha|bonjour/, t: 'salut|lo|hi|coucou|casse-toi|yo|hey biloute'},
    { r: /aimes/, t: 'non|peut-etre|que dalle'},
    { r: /nom|appelle|qui es tu/, t: 'franchement, apprend à lire|robert, c fou non|le pape|la reine dangleterre'},
    { r: /moi|toi/, t: 'toi même|t pas bo|tu t vu qd t\'as bu ?'},
    { r: /blague|humour|joke/, t: 'franchement, jai rien en stock|va regarder du p0rn|au boulot mon gros|tavu l\'heure ?'},
];


class Smalltalk extends Talk {
    constructor(slack, message) {
        super(slack, message);
    }


    answer() {
        for (let i = 0; i < exprs.length; ++i) {
            const expr = exprs[i];
            if (this.text.match(expr.r)) {
                this.simple(expr.t.split('|'));

                return true;
            }
        }

        return false;
    }
}


////////////

module.exports = Smalltalk;