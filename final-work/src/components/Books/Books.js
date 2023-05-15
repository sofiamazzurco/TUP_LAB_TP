import "./Books.css";

import BookItems from "../BookItems/BookItems";

const Books = ({ books }) => {
    return (
        <div className="books-container">
            {books.map((book) => (
                <BookItems
                key={book.id}
                title={book.title}
                author={book.author}
                dateRead={book.dateRead}
                pageCount={book.pageCount}
                />
            ))}
        </div>
    );
};

export default Books;
/*En este componente, estamos usando la 
función map() para iterar sobre la matriz 
de libros y renderizar un "BookItem" para 
cada uno de ellos. También estamos pasando cada 
libro como una prop al componente "BookItem".*/