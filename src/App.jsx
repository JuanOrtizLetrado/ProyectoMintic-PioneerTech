
import Index from 'pages';
import Registro from 'Login/registro';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Admin from 'pages/admin';
import Layout2 from 'layouts/layout2';



function App() {
  return (
    <div className='App'>
      <Router>
        <Layout2>
          <Switch>
            <Route path='/registro'>
              <Registro />
            </Route>
            <Route path='/Admin'>
              <Admin />
            </Route>
            <Route path='/'>
              <Index />
            </Route>
          </Switch>
        </Layout2>

      </Router>

    </div>

  );
}

export default App;
