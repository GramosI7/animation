import React from "react";
import "./styles/App.scss";

import SectionOne from "./pages/SectionOne";
import SectionThree from "./pages/SectionThree";
import SectionTwo from "./pages/SectionTwo";

import { Switch, Route, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import SectionFour from "./pages/SectionFour";
import SectionFive from "./pages/SectionFive";

function App({ location }) {
  const currentKey = location.pathname.split("/")[1] || "/";
  const timeout = { enter: 1000, exit: 1000 };

  return (
    <div className="app">
      <TransitionGroup component="main" className="page-main">
        <CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear>
          <section className="page-main-inner">
            <Switch location={location}>
              <Route exact path="/" component={SectionOne} />
              <Route exact path="/2" component={SectionTwo} />
              <Route exact path="/3" component={SectionThree} />
              <Route exact path="/4" component={SectionFour} />
              <Route exact path="/5" component={SectionFive} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default withRouter(App);
