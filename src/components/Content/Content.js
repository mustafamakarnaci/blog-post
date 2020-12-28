import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import { routes } from '../../config/Router';
import SessionContext from '../../contexts/SessionContext';
import PrivateRoute from '../../utils/PrivateRoute';
import '../../App.css';
const Content = () => {
    const { isAuthenticated } = useContext(SessionContext);
    
    return (
        <Container>
            <Switch>
                {routes.map((route) =>
                    route.isPrivate ? (

                        <PrivateRoute
                            key={route.title}
                            exact={route.exact}
                            path={route.path}
                            isAuthenticated={isAuthenticated}>

                            {route.component()}

                        </PrivateRoute>
                    ) : (
                            <Route key={route.title} exact={route.exact} path={route.path}>
                                {route.component()}
                            </Route>
                        ))}
            </Switch>
        </Container>
    )
}

export default Content;
