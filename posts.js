function setupPosts() {
    // abstract away, pass only what to do for each element
    // can add to list, whatever
    return backend.document.search(
        'social-media',
        'posts',
    ).then(r =>
        addPosts(r._response.hits)
    ).then(() =>
        backend.realtime.subscribe(
            'social-media',
            'posts',
            {},
            p => {
                if (p.action == "create")
                    addPost(p.result._source, p.result._id)//addPost()
                else if (p.action == "delete")
                    removePost(p.result._id)
                else
                    console.log(p)
            }
        ))
}

function addPosts(posts) {
    posts.forEach(element => {
        addPost(element._source, element._id)
    });
}

function addPost(post, postID) {
    const elem = 
    `<div class="post" id="${postID}">
        <div class="post-text">
            ${post.text}
        </div>
        <button class="delete-post" onclick='deletePost("${postID}")'> 
            delete
        </button>
    </div>`
    const container = document.getElementById('your-posts')
    container.insertAdjacentHTML('afterbegin', elem)
}

function removePost(postID) {
    const e = document.querySelector(`div#${postID}`)
    e.parentElement.removeChild(e)
}

function deletePost(postElem) {
    backend.document.delete(
        'social-media',
        'posts',
        postElem
    ).then(id =>
        console.log(`deleted ${id}`))
}

function submitPost() {
    const input = document.querySelector("textarea#new-post")
    backend.document.create(
        'social-media',
        'posts',
        {
            text: input.value
        }
    )
    input.value = ""
}