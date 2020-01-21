class DatabaseConnection {
    constructor(collectionName) {
        this.collectionName = collectionName
            // onConnectedFunctions.push(this..onConnected)
        backend.on('connected', () => this.onConnected())
        this.subscribe()
    }

    getMessage(functionName) {
        return `
            change ${functionName} in your .js file to 
            call a custom function when this happens
        `
    }

    onConnected() {
        console.log(`
            connected to backend.
            ${this.getMessage('onConnected')}
        `)
    }

    onNew(obj) {
        console.log(`
            a new object was created in ${this.collectionName}. 
            ${this.getMessage('onNew')}
        `)
    }

    onDeleted(id) {
        console.log(`
            an object was deleted in ${this.collectionName}. 
            ${this.getMessage('onDeleted')}
        `)
    }

    /**
     * 
     * @param {object} obj 
     * @param {function(object)} callback  to execute after creating
     */
    create(obj, callback) {
        backend.document.create(
                'social-media',
                this.collectionName,
                obj
            )
            .then(this.unwrap)
            .then((obj) => {
                console.log(`created `, obj.id)
                callback()
            })
    }

    delete(id) {
        backend.document.delete(
            'social-media',
            this.collectionName,
            id
        ).then(id =>
            console.log(`deleted ${id} from ${this.collectionName}`))
    }

    getAll(callback) {
        backend.document.search(
                'social-media',
                this.collectionName,
            ).then(r => r.hits.map(this.unwrap))
            .then(callback)
    }

    subscribe() {
        backend.on('connected', () => backend.realtime.subscribe(
            // TODO needs to be ID of the student
            'social-media',
            this.collectionName, {},
            p => {
                if (p.action == "create")
                    this.onNew(this.unwrap(p.result)) //addPost()
                else if (p.action == "delete")
                //TODO    
                    this.onDeleted(p.result._id)
                else
                    console.log(p)
            }))
    }
    unwrap(response) {
        const obj = response._source
        obj.id = response._id
        return obj
    }

}