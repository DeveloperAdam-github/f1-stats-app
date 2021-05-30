import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import FooterNav from './components/FooterNav';
import DriversPage from './pages/DriversPage';
import ConstructorsPage from './pages/ConstructorsPage';
import RaceCalendar from './pages/RaceCalendar';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' component={Homepage} exact />
          <Route path='/standings' component={DriversPage} exact />
          <Route path='/constructors' component={ConstructorsPage} exact />
          <Route path='/racecalendar' component={RaceCalendar} />
        </Switch>
        <FooterNav />
      </Router>
    </div>
  );
}

export default App;
