import * as routes from 'routes';

const sitemap = [
  {
    id: 'HOME',
    title: '홈',
    path: '',
    exact: true,
    children: routes.Home,
  },
  {
    id: 'STATUS',
    title: '리얼클래스',
    path: 'real',
    children: [
      {
        id: 'INTRO',
        title: '',
        path: 'intro',
        exact: true,
        children: routes.RealIntro,
      },
      {
        id: 'TEST',
        title: '',
        path: 'test',
        exact: true,
        children: routes.RealTest,
      },
      {
        id: 'ANALYSIS',
        title: '',
        path: 'analysis',
        exact: true,
        children: routes.RealAnalysis,
      },
      {
        id: 'RESULT',
        title: '',
        path: 'result',
        exact: true,
        children: routes.RealResult,
      },
    ],
  },
];

sitemap.id = 'sitemap-name';
sitemap.NotFound = routes.NotFound;

export default sitemap;
