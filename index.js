import fetch from 'node-fetch';

let indexCounter = 0;
let errorCounter = 0;
const regEx = /<title>Chrome River<\/title>/g;

const callIndex = async () => {
    const options = {
        headers: {
            'cookie': 'cr_s_c4staging=9423ac22-28b0-481a-9452-2de5647267f0'
        }
    }
    const startTime = Date.now();
    const response = await fetch('https://staging-app.us1.chromeriver.com/index', options);
    const endTime = Date.now();
    const data = await response.text();

    const isIndexPage = data.search(regEx) > -1;
    
    if (isIndexPage) {
        indexCounter++;
        console.log(`*** - Index rendered: ${indexCounter}. Call took ${endTime - startTime} ms.`);
        return;
    }

    errorCounter++;
    console.log(`XXXXXXXXXXX - Page redirected: ${errorCounter}`)
}

// setInterval(makeCall, 100);

const start = async () => {
    for (let counter = 0; counter < 10000; counter++ ) {
        await callIndex();
    }
};

start();
//callIndex();

