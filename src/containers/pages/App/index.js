import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from '../Register';
import Login from '../Login';
import Dashboard from '../Dashboard';

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Route path="/" exact component={Dashboard}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
      </div>
    </Router>
  );
}

export default App;
