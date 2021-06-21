import './CSS/App.scss';
import {Navbar, Nav, NavDropdown, Form,FormControl, Button} from 'react-bootstrap';
import {Swtich, Route} from 'react-router-dom';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Switch from 'react-bootstrap/esm/Switch';
import Contents from './Contents';
import WritePage from './WritePage'
import UserBlog from './UserBlog';
import SearchPage from './Search';
function App() {
  return (
    <div className="App">
      <header className="blog-header">
        <div className="header-nav">
          <div className="header-nav-left">
            <a href="/">
              <h4>DevLog</h4>
            </a>
          </div>
          <div className="header-nav-right">
            <a className="search-icon" href="/search"><FontAwesomeIcon icon={faSearch}/></a>
            <button className="login-Btn" onClick="">로그인</button>
          </div>
      </div>
    </header>
    <Switch>
      <Route exact path="/">
        <Contents/>
      </Route>

      <Route path="/write">
        <WritePage/>
      </Route>
      <Route path="/@:id">
        <UserBlog/>
      </Route>
      <Route path="/search">
        <SearchPage/>
      </Route>
    </Switch>
    </div>
  );
}

export default App;
