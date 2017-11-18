import React from 'react';

import { Book as IBook } from '../types';
import Book from '../Book';

import { BookList, Book as BooklistBook } from './styles';

interface ListProps {
    books: IBook[];
}

interface ListState {
    selectedBookId: number;
}

export default class BookListComponent extends React.Component<ListProps, ListState> {
    constructor(props: ListProps) {
        super(props);
        this.setSelectedBook = this.setSelectedBook.bind(this);

        this.state = {
            selectedBookId: null
        };
    }
    render() {
        const books = this.props.books;
        if (!books || books.length === 0) {
            return <h1>No books :(</h1>;
        }
    
        return (
            <BookList>
                {books.map((book, i) => (
                    <BooklistBook key={i}>
                        <Book 
                            book={book}
                            onSelect={this.setSelectedBook}
                            reviewShown={this.isBookSelected(book)}
                        />
                    </BooklistBook>
                ))};
            </BookList>
        );
    }

    setSelectedBook(selectedBookId: number) {
        const currentlySelectedBook = this.state.selectedBookId;
        this.setState({
            selectedBookId: currentlySelectedBook === selectedBookId ? null : selectedBookId
        });
    }

    isBookSelected(book: IBook): boolean {
        return this.state.selectedBookId && this.state.selectedBookId === book['Book Id'];
    }
}
