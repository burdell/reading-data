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

  constructor(props: {}) {
    super(props)
    mql.addListener(this.mediaQueryChanged);
  }

  public render() {
    return (
      <MainApp
        hasMatches={this.state.hasMatches}
        scrollToTop={() => scroll()}
      />
    )
  }

  public componentWillUnmount = () => {
    this.state.mql.removeListener(this.mediaQueryChanged)
  }

  public mediaQueryChanged = () =>
    this.setState({ hasMatches: this.state.mql.matches })
}
