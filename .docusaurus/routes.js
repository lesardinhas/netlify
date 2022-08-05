import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/cv-push/markdown-page',
    component: ComponentCreator('/cv-push/markdown-page', '161'),
    exact: true
  },
  {
    path: '/cv-push/docs',
    component: ComponentCreator('/cv-push/docs', '0c1'),
    routes: [
      {
        path: '/cv-push/docs/',
        component: ComponentCreator('/cv-push/docs/', '6e5'),
        exact: true,
        sidebar: "defaultSidebar"
      }
    ]
  },
  {
    path: '/cv-push/',
    component: ComponentCreator('/cv-push/', 'e7f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
