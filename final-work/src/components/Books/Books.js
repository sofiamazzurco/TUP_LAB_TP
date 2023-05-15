import "./Books.css";

import BookItems from "../BookItems/BookItems";

const Books = ({ books }) => {
    return (
        <div className="books-container">
            {books.map((books) => (
                <BookItems key={books.id} books={books} />
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