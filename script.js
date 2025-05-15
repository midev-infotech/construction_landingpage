const description_1 = document.getElementById('desc-txt-1');
const description_2 = document.getElementById('desc-txt-2');
const description_3 = document.getElementById('desc-txt-3');

let count = 0;
setInterval(() => {
    if (count == 0) {
        document.getElementById('desc-txt-1').innerText = 'We';
        document.getElementById('desc-txt-2').innerText = 'build';
        document.getElementById('desc-txt-3').innerText = 'home';
    }
    else if (count == 1) {
        description_1.innerText = 'your vision';
       description_2.innerText = 'is turned';
        description_3.innerText = 'into reality';
    }
    else {
        description_1.innerText = "world's";
       description_2.innerText = 'top';
        description_3.innerText = 'builders';
    }

    count++;
    if (count > 2) {
        count = 0;
    }

}, 7000);