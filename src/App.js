import { BrowserRouter, Route, Routes} from 'react-router-dom'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Dashboard from './components/dashboard/Dashboard'
import Navbar from './components/layout/Navbar'
import CreateReview from './components/review/CreateReview';
import ReviewDetails from './components/review/ReviewDetails'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Dashboard/>}/>
          <Route path='/review/:id' element={<ReviewDetails/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/create' element={<CreateReview/>}/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
