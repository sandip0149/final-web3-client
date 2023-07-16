import{Route,Routes} from 'react-router-dom' 
import './styles/globals.css'

import Home from './pages/Home';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import CreatePost from './pages/CreatePost';

export default function App() {
  return (
     <div className="main">
        <div className="navbar">
            <Navbar/>
        </div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/create-post' element={<CreatePost/>} />
        </Routes>
     </div>
  );
}
