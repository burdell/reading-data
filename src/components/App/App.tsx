import React, { Component } from 'react';
import ReactSidebar from 'react-sidebar';

import { AppState, Book, Stats as IStats, FilterOptions } from '../types';
import BookList from '../BookList';
import Sidebar from '../Sidebar';
import { breakpoints } from '../../shared/breakpoints';
import './reset.css';
import { AppContainer } from './styles';

const mql = window.matchMedia(`(min-width: ${breakpoints.small}rem)`);
export default class App extends Component<{}, AppState> {
  constructor() {
    super();

    this.receiveBooks = this.receiveBooks.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    
    this.state = {
      books: [],
      filterShown: false,
      stats: null,
      filterOptions: null,
      mql,
      sidebarOpen: false,
      sidebarDocked: true
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  public render(): JSX.Element {
    return (
        <div>
          <ReactSidebar
            sidebar={<Sidebar onChange={this.receiveBooks} open={this.state.filterShown} />}
            docked={this.state.sidebarDocked}
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
          >
            <AppContainer>
              <BookList books={this.state.books} />
            </AppContainer>
          </ReactSidebar>
        </div>
    );
  }

  public componentWillMount () {
    mql.addListener(this.mediaQueryChanged);    
    this.setState({mql: mql, sidebarDocked: mql.matches});
  }

  public componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  public receiveBooks(books: Book[], stats: IStats, filterOptions: FilterOptions) {
    this.setState({ books, stats, filterOptions });
  }

  private toggleSidebar() {
    this.setState({ filterShown: true });
  }

  private mediaQueryChanged() {
    this.setState({ sidebarDocked: this.state.mql.matches });
  }

  private onSetSidebarOpen() {
    this.setState({ sidebarOpen: true });
  }
}
