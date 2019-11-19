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

//* RealIntro *//
export const RealIntro = Loadable({
  loader: () => import('routes/real/Intro'),
  loading: Loading,
});
//* RealIntro *//
export const RealTest = Loadable({
  loader: () => import('routes/real/Test'),
  loading: Loading,
});
//* RealIntro *//
export const RealAnalysis = Loadable({
  loader: () => import('routes/real/Analysis'),
  loading: Loading,
});
//* RealIntro *//
export const RealResult = Loadable({
  loader: () => import('routes/real/Result'),
  loading: Loading,
});
