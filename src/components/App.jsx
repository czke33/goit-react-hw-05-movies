import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('../Pages/Home/Home'));
const MovieDetails = lazy(() => import('../Pages/MovieDetail/MovieDetail'));
const Movies = lazy(() => import('../Pages/Movies/Movies'));
const Credits = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
   <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />}>
            <Route path="movies/:movieId" element={<MovieDetails />}>
              </Route>
              <Route path="credits" element={<Credits />}>
                <Route path="reviews" element={<Reviews />}>
                  </Route>
                  <Route path="*" element={<Navigate to="/" replace={true} />} />
                </Route>
                <Route path="*" element={<Navigate to="/" replace={true} />} />
             
            </Route>
          </Routes>
        </Suspense>
             </>
              );
              }

