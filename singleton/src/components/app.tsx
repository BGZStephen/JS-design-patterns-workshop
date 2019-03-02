import * as React from "react"
import { BrowserRouter, Route } from "react-router-dom";
import { Header } from "./header";
import { PageFive } from "./pages/five";
import { PageFour } from "./pages/four";
import { PageThree } from "./pages/three";
import { PageTwo } from "./pages/two";
import { PageOne } from "./pages/one";

declare global {
  interface Window { gapi: any; }
}

export class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <div className="ui container">
              <Route path="/page-1" exact component={PageOne}/>
              <Route path="/page-2" exact component={PageTwo}/>
              <Route path="/page-3" exact component={PageThree}/>
              <Route path="/page-4" exact component={PageFour}/>
              <Route path="/page-5" exact component={PageFive}/>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}