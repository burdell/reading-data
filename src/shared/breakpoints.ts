import { css } from 'react-emotion'

interface Breakpoints {
  medium(s: TemplateStringsArray): string
  small(s: TemplateStringsArray): string
}

export const breakpoints = {
  medium: 68,
  small: 46
}

export const queries = Object.keys(breakpoints).reduce((accumulator, label) => {
  if (typeof breakpoints[label] === 'string') {
    accumulator[label] = (...args) =>
      css`
        @media (${breakpoints[label]}) {
          ${css(...args)};
        }
      `
  } else {
    accumulator[label] = (...args) =>
      css`
        @media (max-width: ${breakpoints[label]}rem) {
          ${css(...args)};
        }
      `
  }

  return accumulator
  // tslint:disable-next-line:align
}, {}) as Breakpoints
