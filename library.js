const titleInput = document.querySelector('#name-input');
const authorInput = document.querySelector('#author-input');
const pagesInput = document.querySelector('#pages-input');
const readInput = document.querySelector('#finish-check');
const container_block = document.getElementById('cards-books');
const boton = document.getElementById("submit-input")
const newBtn = document.getElementById("newBooky")
const formy2 = document.querySelector('#formy')

let myLibrary = [];  // array of my books
let bookCount = 0;

// =============    Constructor book object   ============
function Book(title, author, pages, isRead) {   
    this.title = title;
    this.author = author;
    this.pages = Number(pages);
    this.isRead = isRead;
    this.count = bookCount;
    bookCount++;
}

showBooksInLibrary()

// =============   Event Listeners   ============
boton.addEventListener('click', addBookToLibrary)
newBtn.addEventListener('click', toggleCard)

function toggleCard() {
    formy2.style.display = 'block'
    newBtn.style.display = 'none'
}

function addBookToLibrary() {
    titulo = titleInput.value;
    autor = authorInput.value;
    paginas = pagesInput.value;
    leido = readInput.checked;
    let newBook = new Book(titulo, autor, paginas, leido)
    myLibrary.push(newBook)
    addCard(titulo, autor, paginas, leido, bookCount)
    showBooksInLibrary()
    formy2.style.display = 'none'
    newBtn.style.display = 'block'
}

function addCard(tit, aut, pag, read, id) {
    var insertCard = document.createElement('div');
    insertCard.setAttribute("data-index", id)
    insertCard.innerHTML = `<ul><li> Author <span> ${aut} </span> </li>
    <li> Title<span> ${tit} </span> </li>
    <li> Pages <span>${pag}</span></li>
    <li> Read<span> ${read}</span> </li>
    <button class="deletBtn" id="btn${id}">Delete ${id+1}</button>`;
    insertCard.classList.add("card")
    container_block.appendChild(insertCard);
    const removeBook = document.getElementById("btn"+id );
    removeBook.addEventListener('click', () => { deleteBook(id)});
}

function deleteBook(num) {
    myLibrary.splice(num,1)
    showBooksInLibrary()
}

function showBooksInLibrary() {
    var insertEmpty = document.createElement('div');
    container_block.innerHTML = ''
    myLibrary.forEach(element => {
        addCard(element.title, element.author, element.pages, element.isRead, element.count)
    });
}
