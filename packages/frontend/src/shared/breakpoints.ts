import { css } from 'react-emotion'

interface Breakpoints {
  medium(s: TemplateStringsArray): string
  small(s: TemplateStringsArray): string
}

export const breakpoints = {
  medium: 62,
  small: 46
}

export const queries = Object.keys(breakpoints).reduce((accumulator, label) => {
  if (typeof (breakpoints as any)[label] === 'string') {
    ;(accumulator as any)[label] = (...args: any) =>
      css`
        @media (${(breakpoints as any)[label]}) {
          ${css(...args)};
        }
      `
  } else {
    ;(accumulator as any)[label] = (...args: any) =>
      css`
        @media (max-width: ${(breakpoints as any)[label]}rem) {
          ${css(...args)};
        }
      `
  }

  return accumulator
  // tslint:disable-next-line:align
}, {}) as Breakpoints
