const backend = new KuzzleSDK.Kuzzle(
    new KuzzleSDK.WebSocket('116.203.187.241')
);

backend.on('networkError', error => {
    console.error('Network Error: ', error);
});

// TODO log student id
backend.on('connected', () => {
    console.log('successfully connected to kuzzle server')
})

backend.connect()