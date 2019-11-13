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
    title: '상태',
    path: 'status',
    exact: true,
    children: routes.Status,
  },
  {
    id: 'STATUS',
    title: '상태',
    path: 'status',
    children: [
      {
        id: 'KEY',
        title: 'KEY',
        path: ':key',
        exact: true,
        children: routes.Status,
      },
    ],
  },
];

sitemap.id = 'sitemap-name';
sitemap.NotFound = routes.NotFound;

export default sitemap;
