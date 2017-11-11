const ratings = [1, 2, 3, 4, 5];

export default (ratingNum: number): string => {
    return ratings
        .map((rating) => ratingNum >= rating ? '★' : '☆')
        .join('');
};
