import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getQuery } from 'services/fetch';
import defaultImg from '../images/noPoster.webp';

const URL_QUERY_OPTIONS = `search/movie`; 
const Movies = () => {
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('');
  const [searchParams, setSearchParams] = useSearchParams({}); 
  const movieName = searchParams.get('query') ?? ''; 
  const [foundMovies, setFoundMovies] = useState([]); 

  useEffect(() => {
    getQuery(URL_QUERY_OPTIONS, searchParams)
      .then(response => {
        setFoundMovies(response.results);
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [searchParams]);

  
  const location = useLocation();
  const updateInputSearch = ({ target: { value } }) => {
    const searchObj = value === '' ? {} : { query: value }; 
    setSearchParams(searchObj);
  };

  if (status === 'rejected') {
    return <h2>{`Помилка: ${error.message}`}</h2>;
  }

  return (
    <>
      <h2
        style={{
          marginTop: '20px',
        }}
      >
        It is the Movie Page
      </h2>
      <h3>Here you can search movies</h3>
      <h4
        style={{
          marginBottom: '20px',
        }}
      >
        Start enter movie name below
      </h4>
      <input type="text" onChange={updateInputSearch} value={movieName} />

      {foundMovies.length !== 0 && (
        <div className="accordion" id="accordionExample">
          {foundMovies.map(
            ({
              id,
              title,
              poster_path,
              release_date,
              original_language,
              vote_average,
              vote_count,
              overview,
            }) => {
              return (
                <div key={id}>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapseTwo-${id}`}
                        aria-expanded="false"
                        aria-controls={`collapseTwo-${id}`}
                        style={{ fontSize: '1.2rem' }}
                      >
                        Movie title: &nbsp;
                        <strong> {`${title}`} </strong>
                      </button>
                    </h2>
                    <div
                      id={`collapseTwo-${id}`}
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div
                        className="accordion-body"
                        style={{
                          width: '100%',
                          display: 'flex',
                        }}
                      >
                        <img
                          src={
                            poster_path
                              ? `https://image.tmdb.org/t/p/w500${poster_path}`
                              : defaultImg
                          }
                          className="card-img-top"
                          alt="..."
                          style={{
                            minWidth: '200px',
                            maxWidth: '200px',
                            height: '100%',
                            marginRight: '20px',
                          }}
                        />
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                          }}
                        >
                          <h4>
                            <strong>Release date:</strong>
                            <p style={{ margin: 0 }}>{release_date}</p>
                          </h4>

                          <p style={{ marginBottom: '5px' }}>
                            Original language:
                            <strong>{original_language.toUpperCase()}</strong>
                          </p>

                          <p>
                            <strong>Rating:</strong> <br />
                            <span>
                              Average vote: <strong>{vote_average}</strong>
                            </span>
                            <br />
                            <span>
                              Total votes: <strong> {vote_count}</strong>
                            </span>
                          </p>

                          <h5>
                            <strong>Overview: </strong>
                            <p style={{ fontSize: '1rem' }}>
                              {overview ? overview : 'No review'}
                            </p>
                          </h5>

                          <Link
                            to={`${id}`}
                            className="btn btn-primary"
                            state={location}
                          >
                            See more movie's details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      )}
    </>
  );
};

export default Movies;
