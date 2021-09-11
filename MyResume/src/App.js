import { Fragment } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Navigation from './Components/Navigation';
import AboutPage from './Pages/About';
import ExperiencePage from './Pages/Experience';
import EducationPage from './Pages/Education';
import SkillPage from './Pages/Skill';
import InterestsPage from './Pages/Interests';
import AwardsPage from './Pages/Awards';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/custom.css';

const App = () => {
    return (
        <Fragment>
            <Router>
                <Navigation />
                <div className="container-fluid p-0">
                    <Switch>
                        <Route path="/" exact>
                            <AboutPage />
                        </Route>
                        <Route path="/about-us" exact>
                            <AboutPage />
                        </Route>
                        <Route path="/experience" exact>
                            <ExperiencePage />
                        </Route>
                        <Route path="/education" exact>
                            <EducationPage />
                        </Route>
                        <Route path="/skill" exact>
                            <SkillPage />
                        </Route>
                        <Route path="/interests" exact>
                            <InterestsPage />
                        </Route>
                        <Route path="/awards" exact>
                            <AwardsPage />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </Fragment>
    )
}

export default App;
