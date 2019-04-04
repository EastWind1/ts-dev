console.log('worker run');

onmessage = event => {
    console.log('worker receiving ' + event.data);

    postMessage('I got message');
}
