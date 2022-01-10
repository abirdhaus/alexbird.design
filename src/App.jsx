import React, { Fragment, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, HashRouter } from "react-router-dom";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Loader from "./components/Loader/Loader";

const App = () => {

    const [loader, setLoader] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoader(!loader)
        }, 3500)
    }, [])

  return (

    <>

        {loader && <div className="loader__container">

          <Loader/>

        </div>}
        
        <div className="bg__video">

        <HashRouter basename="/">
          
            {!loader && <>
              <Route exact path="/">
                <Projects/>
              </Route>

              <Route path="/about">
                <About/>
              </Route>
            </>}

        </HashRouter>

      </div>
    </>
  );
};

export default App;
