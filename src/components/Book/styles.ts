import glamorous from 'glamorous';

export const Book = glamorous.div({
    lineHeight: 1,
    padding: '1rem'
});

export const CoverContainer = glamorous.div({
    display: 'flex',
    alignItems: 'center'
});

export const Cover = glamorous.div({
    'display': 'inline-block'
});

export const CoverImage = glamorous.img({
    width: '7rem',
    boxShadow: '0px 0px 5px 0px rgba(180,180,180,1)'
});

export const ReadDate = glamorous.div({
    fontSize: '.5rem',
    color: 'rgb(165, 165, 165)',
    fontStyle: 'italic',
    marginBottom: '.4rem'
});

export const BookDetails = glamorous.div({
    paddingLeft: '1rem',
    lineHeight: '1.2rem'
});

export const BookInfo = glamorous.div({
    width: '100%',
    marginBottom: '.3rem'
});

export const BookReview = glamorous.div({
    marginTop: '1rem',
    fontSize: '.8rem',
    color: 'rgb(90, 90, 90)',
    lineHeight: '1.2'
});

export const BookAuthor = glamorous.span({
    fontSize: '.8rem',
    color: 'rgb(160, 160, 160)'
});

export const BookTitle = glamorous.div({
    fontSize: '1rem' 
});