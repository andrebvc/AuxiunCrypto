import React from 'react';
import './App.css';
import NavBar from './components/navbar/navbar';
import Content from './components/Content/content';

function App() {
  const [loggedIn, setLoginStatus] = React.useState(false);
  const [user, setUser] = React.useState([]);

  const handleNewUser = (userInfo) => {
    setUser([{userInfo}])
    setLoginStatus(true);
  }

  return (
    <div className="App">
      <NavBar user={user} loggedIn={loggedIn}></NavBar>
      <br />
      <Content handleNewUser={(userInfo) => handleNewUser(userInfo)} user={user} loggedIn={loggedIn}/>  
    </div>
  );
}

export default App;
