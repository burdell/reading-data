import React from 'react';

import { Book as IBook } from '../types';
import Book from '../Book';

import './styles.css';

interface ListProps {
    books: IBook[];
}

export default ({ books }: ListProps): JSX.Element => {
    if (!books || books.length === 0) {
        return <h1>No books :(</h1>;
    }

    return (
        <div className="BookList">
            {books.map((book, i) => (
                <div key={i}>
                    <Book book={book} />
                </div>
            ))};
        </div>
    );
};
