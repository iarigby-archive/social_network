// TODO better naming
const postsBackend = new DatabaseConnection('posts')


postsBackend.onConnected = setupPosts
postsBackend.onNew = addPost
postsBackend.onDeleted = removePost

function setupPosts() {
    // abstract away, pass only what to do for each element
    // can add to list, whatever
    postsBackend.getAll(function(posts) {
        addPosts(posts)
    })
}

function addPosts(posts) {
    posts.forEach(element => {
        addPost(element)
    });
}

function addPost(post) {
    const elem =
        `<div class="post" id="${post.id}">
        <div class="post-text">
            ${post.text}
        </div>
        <button class="delete-post" onclick='deletePost("${post.id}")'> 
            delete
        </button>
    </div>`
    const container = document.getElementById('your-posts')
    container.insertAdjacentHTML('afterbegin', elem)
}

function removePost(postID) {
    // const e = document.querySelector(`div#${postID}`)
    const e = document.getElementById(postID)
    e.parentElement.removeChild(e)
}

function deletePost(postElem) {
    postsBackend.delete(postElem)
}

function submitPost() {
    const input = document.querySelector("textarea#new-post")
    postsBackend.create({
        text: input.value
    }, function() {
        input.value = ""
    })
}