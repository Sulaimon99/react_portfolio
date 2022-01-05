import React from 'react';
import {Switch, Route} from 'react-router-dom';

import LandingPage from './landingPage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';





const Main = () => (

    <Switch>
        < Route exact path="/" component={LandingPage} />
        < Route  path="/contact" component={Contact} />
        < Route  path="/projects" component={Projects} />
        < Route  path="/resume" component={Resume} />
        < Route  path="/aboutme" component={AboutMe} />

    </Switch>

)
export default Main;