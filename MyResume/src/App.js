import { Fragment, Suspense } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Navigation from './Components/Navigation';
import Routes from './Config/Route';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/custom.css';

const App = () => {
    return (
        <Fragment>
            <Router>
                <Navigation />
                <div className="container-fluid p-0">
                    <Suspense fallback={() => console.log("Loading")}>
                        <Switch>
                            {
                                Routes.map((route, idx) => {
                                    return <Route key={idx} path={route?.path} exact={route?.exact} render={props => {
                                        return <route.component {...props} title={route.name} />
                                    }} />
                                })
                            }
                        </Switch>
                    </Suspense>
                </div>
            </Router>
        </Fragment>
    )
}

export default App;
