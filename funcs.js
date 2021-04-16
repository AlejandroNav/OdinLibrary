  
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#number');
const readInput = document.querySelector('#finished');

const submitBtn = document.getElementById('submitBtn');

let myLibrary = [];



function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = Number(pages);
    this.isRead = isRead;
}

function addBookToLibrary() {
    titulo =  titleInput.value;
    autor =  titleInput.value;
    paginas = pagesInput.value;
    leido = readInput.checked;
    let newBook = new Book(titulo, autor, paginas, leido)
    myLibrary.push(newBook)
}


function showBooksInLibrary() {
    myLibrary.forEach(element => {
        console.log(" el libro " + element.title);
    });
}

submitBtn.addEventListener('click', addBookToLibrary);


