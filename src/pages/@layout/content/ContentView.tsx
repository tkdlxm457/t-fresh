import { Redirect, Route, Switch } from 'react-router-dom';
import routes from '../routes';
import AppSuspense from '../suspense/AppSuspense';
import './ContentView.scss'

/**
 * 컨텐츠
 */
const ContentView = () => {
    return (
            <AppSuspense>
                <Switch>
                    {
                        routes.map((route, idx) => {
                            return (
                                <Route
                                    key={idx}
                                    exact
                                    path={route.path}
                                    component={route.component}
                                />
                            );
                        })
                    }
                    <Redirect to="/about"></Redirect>
                </Switch>
            </AppSuspense>
    );
};

export default ContentView;
