//rfc
import React from 'react';

import ReadDate from '../ReadDate/ReadDate';
// import BookCard from '../BookCard/BookCard.css';

import './BookItems.css'

const BookItems = ({title, author, dateRead, pageCount}) => {
    //hardcoded
    // const bookDate = new Date("2023-05-02");
    // const bookTitle = "Padre Rico, padre Pobre";
    // const bookAuthor = "Robert";
    // const bookPageCount = 320;


    return (
        <div className='books-container'>
            <h2>{title}</h2>
            <h3>{author}</h3>
            <div>
            <ReadDate date={dateRead}/>
            </div>
            <p>{pageCount} pag</p>
        </div>
    );
}

export default BookItems;
