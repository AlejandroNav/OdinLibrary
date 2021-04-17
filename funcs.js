  
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
    autor =  authorInput.value;
    paginas = pagesInput.value;
    leido = readInput.checked;
    let newBook = new Book(titulo, autor, paginas, leido)
    myLibrary.push(newBook)
}

let book1 = new Book("El senor de los anillo ", " Tolkien ", 89, true)
myLibrary.push(book1)
let book2 = new Book("Putas tristes ", " Octavio ", 234, false)
myLibrary.push(book2)

showBooksInLibrary()

function showBooksInLibrary() {
    myLibrary.forEach(element => {
        console.log(" el libro " + element.author);
        var para = document.createElement("P");
        para.innerHTML = "Book name: " + element.title + " del autor "+ element.author + " tiene un total de " + element.pages ;
        document.getElementById("myBooksDiv").appendChild(para)
    });
}

submitBtn.addEventListener('click', addBookToLibrary);


