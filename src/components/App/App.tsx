import React, { Component } from 'react';
import ReactSidebar from 'react-sidebar';

import { AppState, Book, Stats as IStats, FilterOptions } from '../types';
import BookList from '../BookList';
import Sidebar from '../Sidebar';
import Header from '../Header';
import { breakpoints } from '../../shared/breakpoints';
import './reset.css';
import { AppContainer, BodyContainer } from './styles';

const mql = window.matchMedia(`(min-width: ${breakpoints.small}rem)`);
export default class App extends Component<{}, AppState> {
  constructor() {
    super();

    this.receiveBooks = this.receiveBooks.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    
    this.state = {
      books: [],
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
        <AppContainer>
          <ReactSidebar
            sidebar={
              <Sidebar
                onChange={this.receiveBooks}
                open={this.state.sidebarOpen}
                toggleSidebar={this.toggleSidebar} 
              />}
            docked={this.state.sidebarDocked}
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
          >
            <Header toggleSidebar={this.toggleSidebar}/>
            <BodyContainer>
              <BookList books={this.state.books} />
            </BodyContainer>
          </ReactSidebar>
        </AppContainer>
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
    console.log('toggleSidebar');
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  }

  private mediaQueryChanged() {
    this.setState({ sidebarDocked: this.state.mql.matches });
  }

  private onSetSidebarOpen() {
    this.setState({ sidebarOpen: true });
  }
}
