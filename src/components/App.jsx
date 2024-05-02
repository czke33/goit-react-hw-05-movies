import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import { lazy, Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import Container from './Container/Container';


const HomePage = lazy(() => import('../Pages/HomePage'));
const MoviePage = lazy(() => import('../Pages/MoviesPage'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails'));
const NotFound = lazy(() => import('../Pages/NotFound'));

 export const App = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviePage />} />
          <Route path="movies/:movieId" element={<MovieDetails />} />
          <Route path="/" element={<NotFound/>}/>
            <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </Suspense>
    </Container>
  );
};

