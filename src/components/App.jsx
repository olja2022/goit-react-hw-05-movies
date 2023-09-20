import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/Home';

const Movies = lazy(() => import('../pages/Movies'));
const NotFoundPage = lazy(() => import('./NotFoundPage'));
const MovieDetails = lazy(() => import('./MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />

          <Route path="movies/:currentMovie" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </>
  );
};
