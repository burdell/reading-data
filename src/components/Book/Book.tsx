import React from 'react';
import { Date } from 'react-format';

import { Book as IBook } from '../types';
import Rating from '../Rating';

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
    BookTitle,
    ReviewToggle
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
                        <div>
                            <BookInfo>
                                <BookTitle className="Book--title">{book.Title}</BookTitle>
                                <BookAuthor className="Book--author">{book.Author}</BookAuthor>
                            </BookInfo>
                            <Rating rating={book['My Rating']} />
                        </div>
                        {book['My Review'] && 
                            <div style={{position: 'absolute', bottom: 7}}>
                                <ReviewToggle onClick={() => onSelect(book['Book Id'])}>
                                    {reviewShown ? 'Hide' : 'Show'} Review
                                </ReviewToggle>
                            </div>
                        }
                    </BookDetails>
                </CoverContainer> 
                <ReadDate className="Book--read-date">
                    <span>Finished on </span>
                    <Date locale="en-us">{book['Date Read']}</Date>
                </ReadDate>
            </div>
            {reviewShown &&
                <BookReview>
                    <div dangerouslySetInnerHTML={{__html: book['My Review']}} />
                </BookReview>
            }
        </Book>
    );   
};
