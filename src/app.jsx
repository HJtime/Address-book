import './app.css';
import Login from './componentes/login/login';
import Maker from './componentes/maker/maker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App({authService}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={['/', '/Address-book']}>
          <Login authService={authService}/>
        </Route>
        <Route path="/maker">
          <Maker/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
