/*

Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)

*/

// Your code goes here
function createInputElm(label, type = "text") {
  let lab = document.createElement("label");
  let inp = document.createElement(`input`);
  inp.setAttribute(`type`, `${type}`);
  lab.append(`${label}`);
  lab.append(inp);

  return lab;
}
// TEST
createInputElm("Your name"); //<label>Your name: <input type="text"></label>
createInputElm("Your age", "number"); //<label>Your age: <input type="number"></label>

// 2. Do the same thing as above using string literal like `<h1>Hello</h1>`

// Your code goes here

// TEST
createInputElm("Your name"); //<label>Your name: <input type="text"></label>
createInputElm("Your age", "number"); //<label>Your age: <input type="number"></label>

// 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
// the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>
// Your code goes here
function createList(arr) {
  let ul = document.createElement("ul");
  for (let elem of arr) {
    let li = document.createElement(`li`);
    li.innerText = `${elem}`;
    ul.append(li);
  }

  return ul;
}
// TEST
createList(["ALABAMA", "ALASKA", "HAWAII", "KENTUCKY"]);
createList(["Afghanistan", "Antarctica", "Congo", "Estonia"]);

// 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below
/* 
<ul>
  <li>
    <p>Learn DOM</p>
    <input type="checkbox" checked name="" id="">
    <span>X</span>
  </li>
</ul>
*/

// Your code goes here
function createTodoList(arr) {
  let resArr = [];
  for (let obj of arr) {
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.innerText = `${obj["name"]}`;
    let inp = document.createElement("input");
    inp.setAttribute("type", "checkbox");
    let span = document.createElement("span");
    span.innerText = "X";
    li.append(p);
    li.append(inp);
    li.append(span);
    obj["isDone"] == true ? inp.checked : {};
    ul.append(li);
    resArr.push(ul);
  }

  return resArr;
}
// TEST
createTodoList([
  { name: "Learn DOM", isDone: false },
  { name: "Learn JS", isDone: true },
]);
createTodoList([
  { name: "Learn DOM", isDone: false },
  { name: "Learn React", isDone: true },
  { name: "Learn JS", isDone: true },
]);
