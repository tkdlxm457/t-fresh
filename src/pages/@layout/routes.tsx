import React from 'react';
import { Redirect } from 'react-router-dom';

/**
 * 라우트
 */
const routes = [
    {
        path: '/',
        component: () => <Redirect to={'/about'} />
    },
    {
        path: '/about',
        title: 'about',
        component: React.lazy(() => import('../about/About'))
    },
    {
        path: '/solutions',
        title: 'solutions',
        component: React.lazy(() => import('../solutions/Solutions'))
    },
];

export default routes;
