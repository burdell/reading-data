import React, { Component } from 'react';

import { AppState, BookDataService } from '../types';
import DataService from '../../data/data-service';
import BookList from '../BookList';
import FilterBar from '../FilterBar';

import './styles.css';

export default class App extends Component<{}, AppState> {
  private dataService: BookDataService;

  constructor() {
    super();

    this.dataService = new DataService() as BookDataService;
    
    this.state = {
      bookList: [],
      stats: {
        bookCount: null,
        pageCount: null,
        ratingCount: null
      },
      filterOptions: {
        read: true
      }
    };
  }

  public componentDidMount() {
    const bookData = this.dataService.filter(this.state.filterOptions);
    this.setState({
      bookList: bookData.books,
      stats: { ...bookData.stats }
    });
  }

  public render(): JSX.Element {
    return (
      <div className="App">
        <FilterBar />
        <BookList books={this.state.bookList} />
      </div>
    );
  }
}
