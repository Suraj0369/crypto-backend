import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import CoinPage from "./pages/CoinPage";
import Page from './components/LandingPage/Page.js';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import Forum from './components/Forum/Forum.js'
import { makeStyles } from "@material-ui/core";

function App() {
  
  const useStyles = makeStyles( () => (
    {
      App: {
        backgroundColor: '#14161a',
        color: 'white',
        minHeight: '100vh'
      }
    }
  ));

  const classes = useStyles();
  
	return (
		<div className={classes.App}>
			
			<Routes>
      <Route path="/" element={<Page />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
				  <Route path="/coins" element={<Homepage />} exact/>
				  <Route path="/coins/:id" element={<CoinPage/>} />
          <Route path="/forum" element={<Forum />} />
			</Routes>
		</div>
	);
}

export default App;
