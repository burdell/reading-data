import styled from 'react-emotion';

export const Book = styled('div')`
    line-height: 1;
    padding: 1rem;
`;

export const CoverContainer = styled('div')`
    display: flex;
    align-items: center;
`;

export const Cover = styled('div')`
    display: inline-block;
`;

export const CoverImage = styled('img')`
    width: 7rem;
    box-shadow: 0px 0px 5px 0px rgba(180,180,180,1);
`;

export const ReadDate = styled('div')`
    font-size: .5rem;
    color: rgb(165, 165, 165);
    font-style: italic;
    margin-bottom: .4rem;
`;

export const BookDetails = styled('div')`
    padding-left: 1rem;
    line-height: 1.2rem;
`;

export const BookInfo = styled('div')`
    width: 100%;
    margin-bottom: .3rem;
`;

export const BookReview = styled('div')`
    margin-top: 1rem;
    font-Size: .8rem;
    color: rgb(90, 90, 90);
    line-height: 1.5;
`;

export const BookAuthor = styled('span')`
    font-size: .8rem;
    color: rgb(160, 160, 160);
`;

export const BookTitle = styled('div')`
    font-size: 1rem;
`;
