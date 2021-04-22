const titleInput = document.querySelector('#name-input');
const authorInput = document.querySelector('#author-input');
const pagesInput = document.querySelector('#pages-input');
const readInput = document.querySelector('#finish-check');
const container_block = document.getElementById('cards-books');
const boton = document.getElementById("submit-input")

let myLibrary = [];  // array of my books
let bookCount = 0;
function Book(title, author, pages, isRead) {   // Constructor book object
    this.title = title;
    this.author = author;
    this.pages = Number(pages);
    this.isRead = isRead;
    this.count = bookCount;
    bookCount++;
}



showBooksInLibrary()

function addBookToLibrary() {
    titulo = titleInput.value;
    autor = authorInput.value;
    paginas = pagesInput.value;
    leido = readInput.checked;
    let newBook = new Book(titulo, autor, paginas, leido)
    myLibrary.push(newBook)
    addCard(titulo, autor, paginas, leido,bookCount)
    showBooksInLibrary()
    formy2.style.display = 'none'
    newBtn.style.display = 'block'
}

function showBooksInLibrary() {
    var insertEmpty = document.createElement('div');
    container_block.innerHTML = ''
    myLibrary.forEach(element => {
        addCard(element.title, element.author, element.pages, element.isRead,element.count)
    });
}



function addCard(tit, aut, pag, read,id) {
    var insertCard = document.createElement('div');
    insertCard.setAttribute("data-index",id )
    insertCard.innerHTML = `<ul><li> Author <span> ${aut} </span> </li>
    <li> Title<span> ${tit} </span> </li>
    <li> Pages <span>${pag}</span></li>
    <li> Read<span> ${read}</span> </li>
    <li> numero<span> ${id}</span> </li>  </ul>`;
    insertCard.classList.add("card")
    container_block.appendChild(insertCard);
}

boton.addEventListener('click', addBookToLibrary)


/// Funcionality for the form button
const newBtn = document.getElementById("newBooky")
const formy2 = document.querySelector('#formy')

newBtn.addEventListener('click', testy2)
function testy2() {
    formy2.style.display = 'block'
    newBtn.style.display = 'none'
}