function getElement(id) {
    return document.getElementById(id)
}

function getElements(className) {
    return Array.from(document.getElementsByClassName(className))
}

// function delay(interval, id) {
//     return it(`დალოდება ${id}`, done => {
//             setTimeout(() => done(), interval)
//         }).timeout(interval + 100) // The extra 100ms should guarantee the test will not fail due to exceeded timeout
// }

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
                // ბექენდთან კავშირის დასამყარებლად
                // setTimeout(() => done(), 500)
        })
        const postClass = 'post'
        it(`ტექსტის შეყვანის და ღილაკზე დაჭერის შემოწმება`, (done) => {
            getElement(newPostID).value = postText
            const e = document.querySelector(`button#${submitID}`)
            const click = new MouseEvent('click', {
                view: window
            })
            e.dispatchEvent(click)
                // ახალი პოსტის გამოსაჩენად
            setTimeout(() => done(), 300)
        })
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
        it(`პოსტის წაშლა უნდა შეიძლებოდეს ${deleteClass}\
        კლასის ღილაკით`, (done) => {
                const remove = document.querySelector(`button.${deleteClass}`)
                expect(remove).to.not.be.null
                const click = new MouseEvent('click', {
                    view: window
                })
                remove.dispatchEvent(click)
                setTimeout(() => done(), 300)
            })
            // delay(200, 'პოსტის წაშლისთვის')
        it('პოსტის წაშლის შემოწმება', () => {
            const text = document.querySelector(`div.${postTextClass}`).innerHTML
            expect(text).to.not.equal(postText)
        })
    })
})