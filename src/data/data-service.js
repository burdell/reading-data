import Papa from 'papaparse';
import _ from 'lodash';

import readingData from './data';

function formatResult(data) {
  const columns = data.shift(); 
  return _.map(data, (book) => {
    const isbn = book.ISBN;
    const parsedISBN = isbn.match(/="(.+)"/);
    book.ISBN = parsedISBN ? parsedISBN[1] : isbn;
    if (book.Title === "Growing in Christ") {
      console.log(isbn, parsedISBN);
    }

    return book;
  });
}

export default class DataService {
  constructor() {
    this.readingData = [];
    this.chainValue = null;

    this.filterFns = [];
    this.readingData = formatResult(readingData);
  }

  read(read = true) {
    this.filterFns.push((book) => {
      const isRead = !!book['Date Read'];
      return read === isRead;
    });

    return this;
  }

  year(desiredYears, dateAttribute = 'Date Read') {
    this.filterFns.push((book) => {
      const date = book[dateAttribute];
      if (!date) return false;

      const year = date.split('/').shift();
      return (_.indexOf(desiredYears, Number(year)) >= 0);
    });

    return this;
  }

  month(desiredMonths, dateAttribute = 'Date Read') {
    this.filterFns.push((book) => {
      const date = book[dateAttribute];
      if (!date) return false;

      const month = date.split('/')[1];
      return _.indexOf(desiredMonths, Number(month)) >= 0;
    })

    return this;
  }

  rating(desiredRatings) {
    this.filterFns.push((book) => {
      const bookRating = Number(book['My Rating']);
      return _.indexOf(desiredRatings, bookRating) >= 0;
    });

    return this;
  }

  filter(options) {
    _.each(options, (value, key) => {
        if (_.isUndefined(value) || _.isNull(value) || value.length === 0) return;
        const filterFn = this[key];
        if (filterFn) this[key](value);
      })

      return this.value();
  }

  value() {
    let pageCount = 0;
    let ratingCount = 0;
    
    const books = _.chain(this.readingData)
      .filter((book) => {
        let bookIsValid = true;
        _.each(this.filterFns, (fn) => {
            let valid = fn(book);
            if (!valid) bookIsValid = false;
        });

        if (bookIsValid) {
            pageCount += Number(book['Number of Pages']) || 0;
            ratingCount += Number(book['My Rating']);
        }

        return bookIsValid;
      })
      .orderBy(book => book['Date Read'], 'desc')
      .valueOf();

    this.filterFns = [];

    return {
      books,
      stats: {
        bookCount: books.length,
        pageCount,
        ratingCount
      }
    }
  }
}
