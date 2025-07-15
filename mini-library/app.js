let books = [];
let undo = [];
let originalBooks = [];
let nextid =0;

let title = document.getElementById("title");
let year = document.getElementById("year");
let author = document.getElementById("author");
let id = document.getElementById("id");
let search = document.getElementById("search");

let buttons = document.querySelectorAll(".btn");
let table = document.querySelector("table");

buttons[0].onclick = () => {
  let t = title.value.trim();
  let y = year.value.trim();
  let a = author.value.trim();

  if (!t || !a || !y) {
    alert("All fields are required.");
    return;
  }

  if (isNaN(y) || y.length !== 4) {
    alert("Enter a valid 4-digit year.");
    return;
  }

  if (t.length < 2) {
    alert("Title must be at least 2 characters.");
    return;
  }

  if (a.length < 2) {
    alert("Author must be at least 2 characters.");
    return;
  }

  if (!/^[a-zA-Z ]+$/.test(t)) {
    alert("Title should only contain letters.");
    return;
  }

  if (!/^[a-zA-Z ]+$/.test(a)) {
    alert("Author name should only contain letters.");
    return;
  }

  let i = String(nextid++);
  const idExists = books.some(book => book.id === i); 
  if (idExists) {
    alert("Error: ID must be unique. This ID already exists.");
    return;
  }

  const book = { id: i, title: t, author: a, year: y };
  books.push(book);
  originalBooks.push(book);

  addBookToTable(book);

  title.value = "";
  year.value = "";
  id.value = "";
  author.value = "";

  console.log(books);
};

buttons[1].onclick = () => {
  let key = search.value.toLowerCase();

  table.innerHTML = `
    <tr>
      <th>Title</th>
      <th>Author</th>
      <th>Year</th>
      <th>Id</th>
      <th>Action</th> 
    </tr>
  `;

  let toDisplay =
    key === ""
      ? books
      : books.filter(
          b =>
            b.title.toLowerCase().includes(key) ||
            b.author.toLowerCase().includes(key) ||
            b.year.toLowerCase().includes(key) ||
            b.id.toLowerCase().includes(key)
        );

  for (let b of toDisplay) {
    addBookToTable(b);
  }
};

buttons[2].onclick = function () {
  undo = [...books];
  table.innerHTML = `
    <tr>
      <th>Title</th>
      <th>Author</th>
      <th>Year</th>
      <th>Id</th>
    </tr>
  `;
};

buttons[3].onclick = function () {
  books = [...undo];
  table.innerHTML = `
    <tr>
      <th>Title</th>
      <th>Author</th>
      <th>Year</th>
      <th>Id</th>
    </tr>
  `;
  for (let b of books) {
    addBookToTable(b);
  }
};

function addBookToTable(book) {
  const row = table.insertRow();

  const titleCell = row.insertCell();
  const authorCell = row.insertCell();
  const yearCell = row.insertCell();
  const idCell = row.insertCell();
  const actionCell = row.insertCell();

  titleCell.textContent = book.title;
  authorCell.textContent = book.author;
  yearCell.textContent = book.year;
  idCell.textContent = book.id;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => {
    if (confirm("Do you really want to delete this book?")) {
      books = books.filter(b => b.id !== book.id);
      row.remove();
    }
  };

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";

  let editing = false;
   editBtn.onclick = () => {
    if (!editing) {
      titleCell.innerHTML = `<input type="text" value="${book.title}">`;
      authorCell.innerHTML = `<input type="text" value="${book.author}">`;
      yearCell.innerHTML = `<input type="text" value="${book.year}">`;
      idCell.innerHTML = `<input type="text" value="${book.id}" disabled>`;
      editBtn.textContent = "Save";
      editing = true;
    } else {
      const newTitle = titleCell.querySelector("input").value.trim();
      const newAuthor = authorCell.querySelector("input").value.trim();
      const newYear = yearCell.querySelector("input").value.trim();

      if (!newTitle || !newAuthor || !newYear) {
        alert("All fields are required.");
        return;
      }

      if (isNaN(newYear) || newYear.length !== 4) {
        alert("Enter a valid 4-digit year.");
        return;
      }

      if (newTitle.length < 2) {
        alert("Title must be at least 2 characters.");
        return;
      }

      if (newAuthor.length < 2) {
        alert("Author must be at least 2 characters.");
        return;
      }

      if (!/^[a-zA-Z ]+$/.test(newTitle)) {
        alert("Title should only contain letters.");
        return;
      }

      if (!/^[a-zA-Z ]+$/.test(newAuthor)) {
        alert("Author name should only contain letters.");
        return;
      }
     

      book.title = newTitle;
      book.author = newAuthor;
      book.year = newYear;

      titleCell.textContent = newTitle;
      authorCell.textContent = newAuthor;
      yearCell.textContent = newYear;
      idCell.textContent = book.id;

      editBtn.textContent = "Edit";
      editing = false;
    }
  };

  actionCell.appendChild(deleteBtn);
  actionCell.appendChild(editBtn);
}