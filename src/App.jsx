
import Index from 'pages';
import Registro from 'Login/registro';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Admin from 'pages/admin';



function App() {
  return (
    <div className='App'>
       <Router>
          <Switch>
          <Route path='/registro'>
           <Registro/>
            </Route>
            <Route path='/Admin'>
           <Admin/>
            </Route>
            <Route path='/'>
            <Index/>
            </Route>
          </Switch>
       
      </Router>
      
    </div>
    
  );
}

export default App;
