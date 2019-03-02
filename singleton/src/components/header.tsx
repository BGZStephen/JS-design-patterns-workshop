import * as React from "react"
import { Link } from "react-router-dom";

export class Header extends React.Component {
  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">Singleton Example</Link>  
        <div className="right menu">
          <Link to="/page-1" className="item">Page 1</Link>
          <Link to="/page-2" className="item">Page 2</Link>
          <Link to="/page-3" className="item">Page 3</Link>
          <Link to="/page-4" className="item">Page 4</Link>
          <Link to="/page-5" className="item">Page 5</Link>
        </div>
      </div>
    );
  }
}