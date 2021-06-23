import './CSS/App.scss';
import './CSS/Login.scss';
import {Navbar, Nav, NavDropdown, Form,FormControl, Button} from 'react-bootstrap';
import {Swtich, Route, Link} from 'react-router-dom';
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaGithub ,FaGoogle, FaFacebook } from 'react-icons/fa'
import Switch from 'react-bootstrap/esm/Switch';
import Contents from './Contents';
import WritePage from './WritePage'
import UserBlog from './UserBlog';
import SearchPage from './Search';
import ViewPage from './ViewPage';
import Search from './Search';
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
      <Route path="/recent">
        <Contents/>
      </Route>
      <Route path="/login">
        <LoginModal/>
      </Route>
      <Route path="/write">
        <WritePage/>
      </Route>
      <Route path="/view/:id" component={ViewPage}/>
      <Route path="/search" component={SearchPage}/> 
      <Route path="/@:id" component={UserBlog}/>
    </Switch>
    </div>
  );
  
  function LoginModal() {
    return(
      <div className="modal-container">
        <div className="login-modal">
          <div className="modal-left-box">
            <div className="img-box">
              <div></div>
            </div>
            <div className="span-box">
              <span>환영합니다!</span>
            </div>
          </div>
          <div className="modal-right-box">
            <div className="right-box-upper">
              <div className="right-box-header">
                <div className="modal-exit" onClick="">
                  <FontAwesomeIcon icon={faTimes}/>
                </div>
              </div>
              <div className="right-box-content">
                <h2>로그인</h2>
                <h4>이메일로 로그인</h4>
                <form onSubmit="">
                  <input type="text" placeholder="이메일을 입력해주세요"></input>
                  <button onClick="submit">로그인</button>
                </form>
                <h4>소셜 계정으로 로그인</h4>
                <div className="modal-logobox">
                  <div className="modal-logobox-icon icon-github-wrap">
                    <FaGithub className="github-icon"/>
                  </div>
                  <div className="modal-logobox-icon icon-google-wrap">
                    <FaGoogle className="google-icon"/>
                  </div>
                  <div className="modal-logobox-icon icon-facebook-wrap">
                    <div className="icon-facebook-inner-wrap">
                      <FaFacebook className="facebook-icon"/>
                    </div>
                   </div>
                </div>
              </div>
            </div>
            <div className="right-box-footer">
              <span>회원이 아니신가요?</span>
              <Link to="/signup">
                <span>회원가입</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
