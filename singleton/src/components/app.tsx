import * as React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom";
import { StreamList } from "./streams/list";
import { StreamCreate } from "./streams/create";
import { StreamEdit } from "./streams/edit";
import { StreamDelete } from "./streams/delete";
import { StreamShow } from "./streams/show";
import { Header } from "./header";

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
              <Route path="/" exact component={StreamList}/>
              <Route path="/new" exact component={StreamCreate}/>
              <Route path="/edit" exact component={StreamEdit}/>
              <Route path="/delete" exact component={StreamDelete}/>
              <Route path="/show" exact component={StreamShow}/>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}