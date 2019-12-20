function getElement(id) {
    return document.getElementById(id)
}

function getElements(className) {
    return Array.from(document.getElementsByClassName(className))
}

function delay(interval, id) {
    return it(`დალოდება ${id}`, done => {
        setTimeout(() => done(), interval)
    }).timeout(interval + 100) // The extra 100ms should guarantee the test will not fail due to exceeded timeout
}

function checkExists(elemID, nodeType) {
    const element = document.getElementById(elemID)
    expect(element).to.not.be.null
    if (nodeType)
        console.log('todo')
    //check   
}
describe('პოსტები', () => {
    const postTextClass = 'post-text'
    const postText = `test post ${new Date()}`

    describe('შექმნა', () => {
        var newPostID = 'new-post'
        it('ახალი პოსტის დაწერა უნდა შეიძლებოდეს \
    textarea ელემენტში id-ით ' + newPostID, () => {
            checkExists(newPostID)
        })
        var submitID = 'submit-post'
        it('პოსტის გამოქვეყნებისთვის უნდა იყოს ღილაკი id-ით ' + submitID, () => {
            checkExists(submitID)
        })
        const postClass = 'post'
        // todo wait for condition
        delay(500, 'ბექენდთან კავშირის დასამყარებლად')
        it(`ტექსტის შეყვანის და ღილაკზე დაჭერის შემოწმება`, () => {
            getElement(newPostID).value = postText
            const e = document.querySelector(`button#${submitID}`)
            const click = new MouseEvent('click', {
                view: window
            })
            e.dispatchEvent(click)
        })
        delay(300, 'ახალი პოსტის გამოსაჩენად')
        it(`ახალი პოსტის ტექსტი, შექმნის შემდეგ,\
    უნდა დაემატოს ${postTextClass} კლასის ელემენტად სხვა ასეთ \
    ელემენტებამდე, ხოლო შეყვანილი ტექსტი უნდა გასუფთავდეს `, () => {
            const post = document.querySelector(`div.${postTextClass}`)
            // console.log(post)
            expect(post.innerHTML.trim()).to.equal(postText)
            expect(getElement(newPostID).value == '')
        })

    })

    describe('წაშლა', () => {
        // TODO check that I'm deleting og post
        const deleteClass = 'delete-post'
        delay(900, 'პოსტის წაშლამდე')
        it(`პოსტის წაშლა უნდა შეიძლებოდეს ${deleteClass}\
        კლასის ღილაკით`, () => {
            const remove = document.querySelector(`button.${deleteClass}`)
            expect(remove).to.not.be.null
            remove.click()
        })
        delay(200, 'პოსტის წაშლისთვის')
        it('პოსტის წაშლის შემოწმება', () => {
            const text = document.querySelector(`div.${postTextClass}`).innerHTML
            expect(text).to.not.equal(postText)
        })
    })
})