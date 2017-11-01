import React, { Component } from 'react';

import { AppState, BookDataService } from '../types';
import DataService from '../../data/data-service';
import BookList from '../BookList';
import FilterBar from '../FilterBar';

import './reset.css';
import './styles.css';

export default class App extends Component<{}, AppState> {
  private dataService: BookDataService;

  constructor() {
    super();

    this.dataService = new DataService() as BookDataService;
    
    this.state = {
      books: [],
      stats: {
        bookCount: null,
        pageCount: null,
        ratingCount: null
      },
      filterOptions: {
        read: true,
        year: [2017]
      }
    };
  }

  public componentDidMount() {
    const { books, stats } = this.dataService.filter(this.state.filterOptions);
    this.setState({ books, stats });
  }

  public render(): JSX.Element {
    return (
      <div className="App">
        <FilterBar />
        <BookList books={this.state.books} />
      </div>
    );
  }
}
