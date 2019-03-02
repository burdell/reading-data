import styled from 'react-emotion'

import { queries } from '../../../shared/breakpoints'
const bookPic = require('./no_books.jpg')

export const NoBooks = styled('div')`
  padding-top: 6rem;
  margin: 0 auto;
  text-align: center;

  h1 {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 2.5rem;
  }
`

export const Image = styled('div')`
    margin: 0 auto;
    background-image: url('${bookPic}');
    background-size: cover;
    display: block;

    width: 500px;
    height: 500px;
    border-radius: 250px;
    -webkit-border-radius: 250px;
    -moz-border-radius: 250px;

    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;

    ${queries.medium`
        width: 350px;
        height: 350px;
        border-radius: 175px;
        -webkit-border-radius: 175px;
        -moz-border-radius: 175px;

        -webkit-transition: all 0.3s ease-out;
        -moz-transition: all 0.3s ease-out;
        -o-transition: all 0.3s ease-out;
        transition: all 0.3s ease-out;
    `}
`
