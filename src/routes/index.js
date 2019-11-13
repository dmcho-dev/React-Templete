import React from 'react';
import Loadable from 'react-loadable';

export const Loading = (x, y, z) => {
  return <div>Loading...</div>;
};

//* NotFound *//
export const NotFound = Loadable({
  loader: () => import('routes/NotFound'),
  loading: Loading,
});

//* Home *//
export const Home = Loadable({
  loader: () => import('routes/Home'),
  loading: Loading,
});

//* Status *//
export const Status = Loadable({
  loader: () => import('routes/Status'),
  loading: Loading,
});
