

## todo
- [ ] download scripts and include locally (that way they can be replaced during tests!)

## api
- id
- 

```js
const postsController = app.getController(posts, filter)
postsController.onDelete = function(id) {

}

// და აქ ტრანსფორმაცია მოხდება ხოლმე მოსული სტრუქტურის
postsController.onNew = function(post) {

}

postsController.delete(id)

postsController.create(object)
```
## სამუშაო გარემო

- html preview (? security extensions უნდა გააუქმონ)
- es6-string-html extension

.git და ეგენი იყოს არჩევითი, ვისაც უნდა გამოიყენოს

## testing

https://www.npmjs.com/package/mochawesome

- [ ] try mocha test, report, etc
- [ ] better front end testing (I think it was called Jasmine)


### ავტომატური ტესტირება
- ბრაუზერის გახსნა და სკრიპტის დამატება, რომელიც გენერირებულ შედეგებს ლოკალჰოსტზე გააგზავნის ან რამე

