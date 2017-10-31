import React from 'react';

import { Book } from '../types';

import './styles.css';

interface BookProps {
    book: Book;
}

export default ({ book }: BookProps) => {
    return (
        <div className="Book">
            <h1>{book.Title}</h1>
        </div>
    );   
};
