import React, { Component } from 'react';
import { AppBar } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { AppState, Book } from '../types';
import BookList from '../BookList';
import Sidebar from '../Sidebar';

import './reset.css';
import { AppContainer, appFont } from './styles';

const muiTheme = getMuiTheme({
  fontFamily: appFont
});

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
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar title="What Nathan Read" style={{backgroundColor: '#0d3c87'}} />
          <AppContainer>
            <Sidebar onChange={this.receiveBooks}/>
            <BookList books={this.state.books} />
          </AppContainer>
        </div>
      </MuiThemeProvider>
    );
  }

  public receiveBooks(books: Book[]) {
    this.setState({ books });
  }
}
