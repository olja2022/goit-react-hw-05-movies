const API_KEY = '4bbdf91bf3cd1196a212f990d3c9214f';
const ULR_BASE_POINT = 'https://api.themoviedb.org/3';

export const getQuery = (URL_QUERY_OPTIONS, searchOptions = '') => {
  // console.log(
  //   `${ULR_BASE_POINT}/${URL_QUERY_OPTIONS}?api_key=${API_KEY}&${searchOptions}`
  // );
  return fetch(
    `${ULR_BASE_POINT}/${URL_QUERY_OPTIONS}?api_key=${API_KEY}&${searchOptions}`
  ).then(response => {
    // Якщо відповідь від сервера - 4XX, то роблю новий об'єкт помилки з необхідним повідомленням:
    if (!response.ok) {
      // console.log(response);
      throw new Error(
        `Якась помилка на сервері або не правильний шлях. 
        Код помилки: ${response.status}.`
      );
    }

    return response.json();
  });
};
