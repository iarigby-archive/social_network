const backend = new KuzzleSDK.Kuzzle(
    new KuzzleSDK.WebSocket('116.203.187.241')
);

backend.on('networkError', error => {
    console.error('Network Error: ', error);
});
backend.on('connected', () => {
    console.log('Successfully connected to Kuzzle');
});

backend.connect()
    .then(() =>
        setupPosts()
    )
