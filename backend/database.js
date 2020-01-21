const {
    Kuzzle,
    WebSocket
} = require('kuzzle-sdk');

// Replace 'kuzzle' with your Kuzzle server hostname (e.g. 'localhost')
const kuzzle = new Kuzzle(
    new WebSocket('localhost')
);

kuzzle.on('networkError', error => {
    console.error('Network Error: ', error);
});

kuzzle.connect()
.then(() => {
    await kuzzle.index.create('social-media');
}).catch(alreadyExists)

const run = async () => {
    try {
        // Connects to the Kuzzle server
        await kuzzle.connect();

        // Creates an index
        await kuzzle.index.create('social-media');

        // Creates a collection
        await kuzzle.collection.create('social-media', 'posts');

        console.log('database ready!');
    } catch (error) {
        

    } finally {
        kuzzle.disconnect();
    }
};

run();
