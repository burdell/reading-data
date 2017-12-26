import React from 'react';
import { Date } from 'react-format';

import { Book as IBook } from '../types';
import Rating from '../Rating';
import Review from './Review';

import {
    ActionsContainer,
    Book,
    CoverContainer,
    Cover,
    CoverImage,
    ReadDate,
    BookDetails,
    BookInfo,
    BookAuthor,
    BookTitle,
    ReviewToggle,
} from './styles';

interface BookProps {
    book: IBook;
    reviewShown: boolean;
    onSelect(bookId: number): void;
}

export default ({ book, reviewShown, onSelect }: BookProps) => {
    return (
        <Book>
            <div>
                <CoverContainer>
                    <Cover>
                        <CoverImage src={`http://images.amazon.com/images/P/${book.ISBN}`} />
                    </Cover>                    
                    <BookDetails>
                        <BookInfo>
                            <ReadDate className="Book--read-date">
                                <Date locale="en-us">{book['Date Read']}</Date>
                            </ReadDate>
                            <BookTitle className="Book--title">{book.Title}</BookTitle>
                            <BookAuthor className="Book--author">{book.Author}</BookAuthor>
                        </BookInfo>
                        <Rating rating={book['My Rating']} />
                    </BookDetails>
                </CoverContainer>
                <ActionsContainer>
                    {book['My Review'] && 
                        <ReviewToggle onClick={() => onSelect(book['Book Id'])}>
                            {reviewShown ? 'Hide' : 'Show'} Review
                        </ReviewToggle>
                    }
                </ActionsContainer>
            </div>
            <Review review={book['My Review']} isShown={reviewShown} />
        </Book>
    );   
};
