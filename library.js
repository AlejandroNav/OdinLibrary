const titleInput = document.querySelector('#name-input');
const authorInput = document.querySelector('#author-input');
const pagesInput = document.querySelector('#pages-input');
const readInput = document.querySelector('#finish-check');
const container_block = document.getElementById('cards-books');
const boton = document.getElementById("submit-input")

let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = Number(pages);
    this.isRead = isRead;
}

let book1 = new Book("The fellowship of the Ring ", " Tolkien ", 89, true)

myLibrary.push(book1)
showBooksInLibrary()

function addBookToLibrary() {
    titulo = titleInput.value;
    autor = authorInput.value;
    paginas = pagesInput.value;
    leido = readInput.checked;
    let newBook = new Book(titulo, autor, paginas, leido)
    myLibrary.push(newBook)
    addCard(titulo, autor, paginas, leido)
    showBooksInLibrary()
}

function showBooksInLibrary() {
    var insertEmpty = document.createElement('div');
    container_block.innerHTML=''
    myLibrary.forEach(element => {
        addCard(element.title, element.author, element.pages, element.isRead)
    });
}



function addCard(tit, aut, pag, read) {
    var insertCard = document.createElement('div');
    insertCard.innerHTML = `<ul><li> Author <span> ${aut} </span> </li>
    <li> Title<span> ${tit} </span> </li>
    <li> Pages <span>${pag}</span></li>
    <li> Read<span> ${read}</span> </li> </ul>`;
    insertCard.classList.add("card")
    container_block.appendChild(insertCard);
}

boton.addEventListener('click', addBookToLibrary)