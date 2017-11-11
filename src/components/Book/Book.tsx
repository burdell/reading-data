import React from 'react';
import { Date } from 'react-format';

import { Book } from '../types';
import Rating from '../Rating';
import Button from '../Elements/Button';

import './styles.css';

interface BookProps {
    book: Book;
    reviewShown: boolean;
    onSelect(bookId: number): void;
}

export default ({ book, reviewShown, onSelect }: BookProps) => {
    return (
        <div className={`Book ${reviewShown ? 'Book--review-shown' : ''}`}>
            <div className="Book--top">
                <div className="Book--cover">
                    <img src={`http://images.amazon.com/images/P/${book.ISBN}`} />
                    <div className="Book--read-date">
                        <span>Finished on </span>
                        <Date locale="en-us">{book['Date Read']}</Date>
                    </div>
                    {book['My Review'] && 
                        <div>
                            <Button onClick={() => onSelect(book['Book Id'])}>
                                {reviewShown ? 'Hide' : 'Show'} Review
                            </Button>
                        </div>
                    }
                </div>
                <div className="Book--details">
                    <div className="Book--info">
                        <div className="Book--title">{book.Title}</div>
                        <span className="Book--author">{book.Author}</span>
                    </div>
                    <div><Rating rating={book['My Rating']} /></div>
                </div>
            </div> 
            {reviewShown &&
                <div className="Book--review">
                    <div dangerouslySetInnerHTML={{__html: book['My Review']}} />
                </div>
            }
        </div>
    );   
};
