import React, { Component } from 'react';
import { AppBar } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { AppState, Book, Stats as IStats, FilterOptions } from '../types';
import BookList from '../BookList';
import Sidebar from '../Sidebar';
import FilterDisplay from '../FilterOptionsDisplay';
import Stats from '../Stats';

import './reset.css';
import { AppContainer, appFont, FullSizeStats } from './styles';

const muiTheme = getMuiTheme({
  fontFamily: appFont
});

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
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar
            title="What Nathan Read"
            style={{backgroundColor: '#0d3c87', position: 'fixed'}}
            onLeftIconButtonTouchTap={this.toggleSidebar}
          >
            <FullSizeStats>
              <Stats stats={this.state.stats} />
            </FullSizeStats>
          </AppBar>          
          <AppContainer>
            <Sidebar onChange={this.receiveBooks} open={this.state.filterShown} />
            <div>
              <FilterDisplay filterOptions={this.state.filterOptions} />
              <BookList books={this.state.books} />
            </div>
          </AppContainer>
        </div>
      </MuiThemeProvider>
    );
  }

  public receiveBooks(books: Book[], stats: IStats, filterOptions: FilterOptions) {
    this.setState({ books, stats, filterOptions });
  }

  private toggleSidebar() {
    this.setState({ filterShown: true });
  }
}
