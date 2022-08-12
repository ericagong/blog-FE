# mini-SNS

### Project

TODO : 영상 교체하기
![TodoList Preview](https://user-images.githubusercontent.com/48196721/182003615-edcd0f87-bfae-4f4a-a649-59691da6dea7.gif)

### Tech Stack

- EC2
- RTK
- axios
- json-server

### Structure Description

TODO : structure 바꾸기

#### Pages

- Home :
  - Main page with todoList view, where user can **create, read, update(toggle `isDone`), delete** each todo.
  - If user clicks `detail` link of each todo, redirects to `/about/:todo_id` page.
- About :
  - Detail page of each todo, where user can **read todo id, title, contents**.
  - If user clicks `Go Back` button, redirects to previous page.
- Not Found :
  - 404 Not Found page for wrong urls.

#### Components

- Layout : Layout for Home view.
- Header : Header, which contains information about project subject and programmed language.
- Form : Form to create new todo.
  - Form consists of two input fields(**title and contents**) and one `Submit` button.
  - If user skipped to fill one of two inputs, `Submit button` disabled.
  - If user typed both fields and clicked `Submit` button, new todo created to store.
- TodoList : TodoList view.
  - It has two categories of todoList.(**Working and Done**)
  - Working shows todos whose state `isDone : false`.
  - Done shows todos whose staet `isDone : true`
- List : List contains of set of todos.
- Todo : Todo shows **todo's title, contents and call to action buttons**.
  - If title or contents is too long, summarized each with `...` .
  - If user clicks `Done` or `Delete` button, todo's isDone state toggles.
  - If user clicks `Delete` button, that todo deletes from store.
  - If user clicks `Detail` link, it redirects to `/about/:todo_id` page.

#### Redux

- todos : `todos module` contains `ACTION`, `ACTION CREATOR`, `INITIAL STATE`, `REDUCER` related to **CRUD of todoList**.
- configureStore : create root store with `todos module`.

### Updated Details

- [x] Refactoring codes
- [x] Change css files to styled-components
- [x] Add max-width, min-width for each page, align items on center of the page
- [x] Check redux is pure function
- [x] Disable `Submit` button if two inputs are not validated
- [x] Route with react-router-dom (v6)
- [x] Summarize title and contents of todo in Home page if it is too long
- [x] use reducer spread ...state
- [x] onClick(e) => delete(e.target.value)
- [x] div wrapper -> <></>
- [x] Submit form with eneter

### Need to update following Details

- [ ] Change createSotre to configureStore from redux-toolkit
- [ ] Try nanoid package
- [ ] Try immer library
- [ ] logger devtools
