(function () {
    'use strict';

    function printWordByWord(...args) {
        let arr = [...args];
        let words = arr.pop().split(' ');
        let time = 0,
            currentTime;

        for (let i = 0; i < words.length; i++) {
            currentTime = i >= arr.length ? arr[arr.length - 1] : arr[i];
            time = time + currentTime;
            setTimeout(() => {
                console.log(words[i]);
            }, time * 1000)
        }
    }

}());