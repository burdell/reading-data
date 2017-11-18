import React from 'react';
import { Date } from 'react-format';

import { Book as IBook } from '../types';
import Rating from '../Rating';
import Button from '../Elements/Button';

import {
    Book,
    CoverContainer,
    Cover,
    CoverImage,
    ReadDate,
    BookDetails,
    BookInfo,
    BookReview,
    BookAuthor,
    BookTitle
} from './styles';

interface BookProps {
    book: IBook;
    reviewShown: boolean;
    onSelect(bookId: number): void;
}

export default ({ book, reviewShown, onSelect }: BookProps) => {
    return (
        <Book>
            <CoverContainer>
                <Cover>
                    <CoverImage src={`http://images.amazon.com/images/P/${book.ISBN}`} />
                    <ReadDate className="Book--read-date">
                        <span>Finished on </span>
                        <Date locale="en-us">{book['Date Read']}</Date>
                    </ReadDate>
                    {book['My Review'] && 
                        <Button onClick={() => onSelect(book['Book Id'])}>
                            {reviewShown ? 'Hide' : 'Show'} Review
                        </Button>
                    }
                </Cover>
                <BookDetails>
                    <BookInfo>
                        <BookTitle className="Book--title">{book.Title}</BookTitle>
                        <BookAuthor className="Book--author">{book.Author}</BookAuthor>
                    </BookInfo>
                    <div><Rating rating={book['My Rating']} /></div>
                </BookDetails>
            </CoverContainer> 
            {reviewShown &&
                <BookReview>
                    <div dangerouslySetInnerHTML={{__html: book['My Review']}} />
                </BookReview>
            }
        </Book>
    );   
};
