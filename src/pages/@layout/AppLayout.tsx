import React from 'react';
import './AppLayout.scss';
import ContentView from './content/ContentView';
import AppFooter from './footer/AppFooter';
import AppHeader from './header/AppHeader';

const AppLayout = () => {
    return (
        <div className='root-container'>
            <AppHeader />
            <ContentView />
            <AppFooter />
        </div>
    );
};

export default React.memo(AppLayout);
