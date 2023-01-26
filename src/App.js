import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';
import CreateReview from './components/review/CreateReview';
import ReviewDetails from './components/review/ReviewDetails';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Navbar />
        <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route path='/review/:id' component={ReviewDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateReview} />
          </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
