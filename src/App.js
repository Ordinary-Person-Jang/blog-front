import './App.scss';
import {Navbar, Nav, NavDropdown, Form,FormControl, Button} from 'react-bootstrap';
import {Swtich, Route} from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import Contents from './Contents';
import WritePage from './WritePage'

function App() {
  return (
    <div className="App">
      <header className="blog-header">
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Devlog</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Button variant="outline-success">로그인</Button>
        <Button variant="outline-success">로그아웃</Button>
      </Navbar.Collapse>
    </Navbar>
    </header>
    <Switch>
      <Route exact path="/">
        <Contents/>
      </Route>

      <Route path="/write">
        <WritePage/>
      </Route>
    </Switch>
    </div>
  );
}

export default App;
