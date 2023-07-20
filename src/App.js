import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import RoutesData from './static/RoutesData'
import Protector from './routes/route_protect/Protector';
import Login from './routes/login/Login'
import ErrorPage from './routes/error/ErrorPage';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route to="/" element={<Protector />}>
          {
            RoutesData?.map(route =>
              <Route key={route._id} path={route.path} element={<route.element />} />
            )
          }
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
