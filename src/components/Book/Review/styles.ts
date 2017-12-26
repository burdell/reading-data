import styled from 'react-emotion';

export const BookReview = styled('div')`
    margin-top: 1rem;
    font-Size: .8rem;
    color: rgb(90, 90, 90);
    line-height: 1.5;

    .book-review {
        max-height: 0;
        overflow-y: hidden;
        transition: max-height .2s ease-in-out;
    }

    .book-review.shown {
        max-height: 50rem;
        transition: max-height .2s ease-in-out;
    }
`;