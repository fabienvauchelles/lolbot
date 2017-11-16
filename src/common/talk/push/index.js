'use strict';


const
    Talk = require('..');


const sentences = [
    'Pt1 qu\'est ce que je me fais chier ici...',
    'Allo ?',
    'Ya qq n ?',
    'Je veux raconter une blague',
    'Tu connais la blague du consultant ?',
    'http://perdu.com',
    'bon, jvais aller trainer sur DansTonChat',
    'une petite VDM ?',
    'faites moi plaisir...',
    '3615 ULA',
    'A l\'huile',
    'T\'es pas beau',
    'C kikiala+gross?',
    'Je suis une giraphe et j\'aime ça',
    'Tu vas au Zoo ?',
    'Pas de bras, pas de clavier',
    'Achète toi un clavier',
    'J\'ai perdu mon compte Facebook.',
    'La RGPD, c\'est pour les giraphes',
    'Tu l\'as vu, tu l\'as voulu, un grand coup dans ton Q',
    'Bon, je vais m\'écouter un pti scud de NTM',
    'Jvais me taper une ligne... de code',
    'Twist aggaiiiiiinnnnnn',
    'Franchement, la méthode Alarache, c\'est la meilleure',
    'Il est des notres, il a compilé comme les autres',
    'T\'es robuste aux fautes d\'orthographe',
    'Jvais t\en foutre du test de Turing',
    'Aller hop, une petite tisane',
    'Qui vient avec moi à Amsterdam ce WE ?',
    'Jvais vous spoiler le dernier épisode de Games of Thrones',
];


class Other extends Talk {
    constructor(slack, message) {
        super(slack, message);
    }


    answer() {
        if (Math.random() < 0.8) {
            return;
        }

        //const delay = Math.floor(Math.random() * 1000 * 60 * 60 * 2);
        const delay = 0;

        setTimeout(() => {
            this.simple(sentences);
        }, delay);

        return false;
    }
}


////////////

module.exports = Other;