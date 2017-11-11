import React, { Component } from 'react';

import { AppState, Book } from '../types';
import BookList from '../BookList';
import Sidebar from '../Sidebar';

import './reset.css';
import './styles.css';

export default class App extends Component<{}, AppState> {
  constructor() {
    super();

    this.receiveBooks = this.receiveBooks.bind(this);
    
    this.state = {
      books: []
    };
  }

  public render(): JSX.Element {
    return (
      <div className="App">
        <Sidebar onChange={this.receiveBooks}/>
        <BookList books={this.state.books} />
      </div>
    );
  }

  public receiveBooks(books: Book[]) {
    this.setState({ books });
  }
}
