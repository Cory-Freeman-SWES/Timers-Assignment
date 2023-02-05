function countdown(num) {
    let interval = setInterval(function() {
        num--;
        if(num <= 0){
            clearInterval(interval);
            console.log('DONE!!!');
        }
        else {
            console.log(num);
        }
    }, 1000)
}

function randomGame() {
    let counter = 1;
    let interval2 = setInterval(function() {
        let num = Math.random();
        if (num < .75) {
            counter++
            console.log(`Num: ${num}`)
            console.log(`Try #: ${counter}`)
        } else {
            clearInterval(interval2)
            console.log(`Num: ${num}`)
            console.log(`It took ${counter} tries to get above .75!`)
        }
    }, 1000)
}