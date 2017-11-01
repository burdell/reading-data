import React from 'react';

import { Book } from '../types';
import Rating from '../Rating';
import Button from '../Elements/Button';

import './styles.css';

interface BookProps {
    book: Book;
}

interface BookState {
    reviewShown: boolean;
}

export default class BookElement extends React.Component<BookProps, BookState> {
    constructor(props: BookProps) {
        super(props);

        this.state = {
            reviewShown: false
        };
    }

    render() {
        const book = this.props.book;        
        return (
            <div className="Book">
                <div className="Book--cover">
                    <img src={`http://images.amazon.com/images/P/${book.ISBN}`} />
                    { book['My Review'] && 
                        <div>
                            <Button onClick={() => this.setState({ reviewShown: !this.state.reviewShown })}>
                                {this.state.reviewShown ? 'Hide' : 'Show'} Review
                            </Button>
                        </div>
                    }
                </div>
                <div className="Book--details">
                    <div className="Book--info">
                        <div className="Book--title">{book.Title}</div>
                        <span className="Book--author">{book.Author}</span>
                    </div>
                    <div className="Book--reading-info">
                        <div><Rating rating={book['My Rating']} /></div>
                        <div>
                            <span>Read on {book['Date Read']}</span>
                        </div>
                        {this.state.reviewShown && <div>{book['My Review']}</div>}
                    </div>
                </div>
            </div>
        );   
    }
}
