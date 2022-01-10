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
        path: '/business',
        title: 'business',
        component: React.lazy(() => import('../business/Business'))
    },
    {
        path: '/notice',
        title: 'notice',
        component: React.lazy(() => import('../notice/Notice'))
    },
    {
        path: '/pressrelease',
        title: 'pressrelease',
        component: React.lazy(() => import('../pressrelease/Pressrelease'))
    },
    {
        path: '/solutions',
        title: 'solutions',
        component: React.lazy(() => import('../solutions/Solutions'))
    },
];

export default routes;
