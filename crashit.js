import fetch from 'node-fetch';

let counter = 0;

const callIndex = async () => {
    const options = {
        headers: {
            'cookie': 'cr_s_c4staging=62e51305-ab6c-4228-b7d3-24ca5d21ac78'
        }
    }
    fetch('https://staging-app.us1.chromeriver.com/index', options);
    counter++;
    console.log(`Call was made: ${counter}`);
}

// setInterval(makeCall, 100);

const start = async () => {
    setInterval(callIndex, 50);
};

start();
//callIndex();

