import React, { Component } from 'react';

import { AppState, Book, Stats as IStats, FilterOptions } from '../types';
import BookList from '../BookList';
import Sidebar from '../Sidebar';

import './reset.css';
import { AppContainer } from './styles';

export default class App extends Component<{}, AppState> {
  constructor() {
    super();

    this.receiveBooks = this.receiveBooks.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    
    this.state = {
      books: [],
      filterShown: false,
      stats: null,
      filterOptions: null
    };
  }

  public render(): JSX.Element {
    return (
        <div>
          <AppContainer>
            <Sidebar onChange={this.receiveBooks} open={this.state.filterShown} />
            <BookList books={this.state.books} />
          </AppContainer>
        </div>
    );
  }

  public receiveBooks(books: Book[], stats: IStats, filterOptions: FilterOptions) {
    this.setState({ books, stats, filterOptions });
  }

  private toggleSidebar() {
    this.setState({ filterShown: true });
  }
}
