import React from 'react';
import './BookItems.css';

import Card from '../Card/Card';
import ReadDate from '../ReadDate/ReadDate';

const BookItems =  ({title, author, date, pages}) => {
    return (
        <Card>
            <div className='div-container'>
            <h1>{title}</h1>
            <h3>{author}</h3>
            <ReadDate readDate = {date}/>
            <p>{pages}</p>
            </div>
        </Card>
    );
};

export default BookItems;