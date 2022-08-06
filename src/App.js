
import './App.css';
import Login from './Screens/RegisterLogin/Login';
import Register from './Screens/RegisterLogin/Register';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import DashView from './Screens/dashboard';
import Page from "./Screens/Page"
import CreateToken from './Screens/CreateToken';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" exact element={
            <Login />
          } />
          <Route path="/register" exact element={
            <Register />
          } />
          <Route path="/dashboard" exact element={
            <Page>
              <DashView />
            </Page>
          } />

          <Route path="/createToken" exact element={
            <Page>
             <CreateToken/>
            </Page>
          } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
