import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getQuery } from 'services/fetch';



const media_type = 'movie';
const time_window = 'week';
const URL_QUERY_OPTIONS = `trending/${media_type}/${time_window}`; 

const Home = () => {
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('');
  const [popMovies, setPopMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    
    getQuery(URL_QUERY_OPTIONS)
      .then(response => {
        if (response.results.length === 0) {
          return;
        }
        setPopMovies(response.results);
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, []);

  if (status === 'rejected') {
    return <h2>{`Помилка: ${error.message}`}</h2>;
  }

  return (
    <>
      <h2
        style={{
          marginTop: '20px',
          marginBottom: '20px',
        }}
      >
        This is the Home Page
      </h2>

      {popMovies.length !== 0 &&
        popMovies.map(({ id, title }) => {
          return (
            <Link key={id} to={`movies/${id}`} state={location}>
              <p>{title}</p>
            </Link>
          );
        })}
    </>
  );
};

export default Home;
