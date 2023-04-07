import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

//root component set up with different routes
//3 pages: home, signup, login
function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              {/* if user logged in, render home */}
              {user && <Home />}
              {!user && <Redirect to="/login/" />}
            </Route>
            <Route path="/signup">
              {/* hide if signed in */}
              {!user && <Signup />}
              {user && <Redirect to="/" />}
            </Route>
            <Route path="/login">
              {/* hide if signed in */}
              {!user && <Login />}
              {user && <Redirect to="/" />}
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
