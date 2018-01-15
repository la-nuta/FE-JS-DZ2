(function () {
    'use strict';

    function printWordByWord(...args) {
        let words = args.pop().split(' ');
        let time = 0,
            currentTime;

        for (let i = 0; i < words.length; i++) {
            currentTime = i >= args.length ? args[args.length - 1] : args[i];
            time = time + currentTime;
            setTimeout(() => {
                console.log(words[i]);
            }, time * 1000)
        }
    }
    printWordByWord(0.3, 0.3, 0.3, 1, 'Карл у Клары украл кораллы и кларнет');

}());