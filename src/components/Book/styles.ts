import styled from 'react-emotion';

const coverImageWidth = '7rem';

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
    width: ${coverImageWidth};
    box-shadow: 0px 0px 5px 0px rgba(180,180,180,1);
    max-height: 12rem;
`;

export const ReadDate = styled('div')`
    font-size: .5rem;
    color: rgb(165, 165, 165);
    font-style: italic;
    margin-bottom: .2rem;
`;

export const BookDetails = styled('div')`
    padding-left: 1rem;
    line-height: 1.2rem;
    display: flex;
    flex-direction: column;
    width: 100%;
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

export const ActionsContainer = styled('div')`
    width: 6rem;
    text-align: center;
    margin-top: .2rem;
`;

export const ReviewToggle = styled('a')`
    cursor: pointer;
    font-size: .8rem;
    background-color: #f2f2f2;
    padding: .5rem .5rem;
    display: inline-block;
    width: 100%;

    :hover {
        color: #376bbf;
        box-shadow: 0px 0px 1px -3px rgba(0,0,0,0.3);;
    }
`;