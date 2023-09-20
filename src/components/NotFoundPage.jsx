import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <h4>
       На жаль, за цією адресою нічого не знайдено...
        {` ¯\\_(ツ)_/¯ `}
      </h4>
      <Link to="/">На головну</Link>
    </>
  );
};

export default NotFoundPage;
