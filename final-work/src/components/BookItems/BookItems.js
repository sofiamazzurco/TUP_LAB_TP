//rfc
import React from 'react';
import BookCard from '../BookCard/BookCard.css';

import './BookItems.css'

const BookItems = ({pTitle, pAuthor, pDate, pPageCount}) => {
    //hardcoded
    const bookDate = new Date("2023-05-02");
    const bookTitle = "Pade Rico, padre Pobre";
    const bookAuthor = "Robert";
    const bookPageCount = 320;

    return (
        <div className='book-item-container'>
            <h2>{pTitle}</h2>
            <h3>{pAuthor}</h3>
            <div>{pDate.toString()}</div>
            <p>{pPageCount} pag</p>
        </div>
    );
}

export default BookItems;
