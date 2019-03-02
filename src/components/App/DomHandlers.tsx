import React, { Component } from 'react'

import { breakpoints } from '../../shared/breakpoints'
import scroll from '../ScrollToTop/scroll'

import { App as MainApp } from './App'

const mql = window.matchMedia(`(min-width: ${breakpoints.small}rem)`)

interface State {
  mql: MediaQueryList
  hasMatches: boolean
}

export interface DOMInfo {
  hasMatches: boolean
  scrollToTop(): void
}

export class App extends Component<{}, Readonly<State>> {
  public readonly state: State = {
    hasMatches: mql.matches,
    mql
  }

  public render() {
    return (
      <MainApp
        hasMatches={this.state.hasMatches}
        scrollToTop={() => scroll()}
      />
    )
  }

  public componentWillMount = () => {
    mql.addListener(this.mediaQueryChanged)
    this.setState({ mql: mql, hasMatches: mql.matches })
  }

  public componentWillUnmount = () => {
    this.state.mql.removeListener(this.mediaQueryChanged)
  }

  public mediaQueryChanged = () =>
    this.setState({ hasMatches: this.state.mql.matches })
}
