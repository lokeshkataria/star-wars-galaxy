import { useEffect } from 'react';
import { StyledApp, StyledMain } from './App.styles';
import Header from '../organisms/Header/Header';
import LoginPage from '../pages/Login/Login';
import SearchPage from '../pages/Search/Search';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../atoms/Loader/Loader';
import { userVerify } from '../../state/actions';

function App() {
  const user = useSelector((state) => state.user);
  const { isLoggedIn, loading } = user;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userVerify());
  }, []);

  return (
    <Router>
      <StyledApp>
        {
          loading ? <Loader /> : (
            <>
              <Header user={user}/>
              <StyledMain>
                <Switch>
                  <Route path="/search">
                    {!isLoggedIn ? <Redirect to="/" /> : <SearchPage />}
                  </Route>
                  <Route path="/">
                    {isLoggedIn ? <Redirect to="/search" /> : <LoginPage />}
                  </Route>
                </Switch>
              </StyledMain>
            </>
          )
        }
      </StyledApp>
    </Router>
  );
}

export default App;
