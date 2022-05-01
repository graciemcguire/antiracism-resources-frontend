import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllResources } from '../utils';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from '../Components/Nav';
import ResourceContainer from '../Components/ResourceContainer';
import About from './About';

const Home = () => {

  const [resources, setResource] = useState([]);
  const [isUserLoggedIn, userStatus] = useState(false);

  useEffect(() => {
    gatherResources();
  }, []);

  const email = useSelector(state => state.email);

  const gatherResources = async () => {
    const data = await getAllResources();
    setResource(data);
    return data;
  };


  const checkForUser = () => {
    if (email) {
      userStatus(true);
    } else {
      userStatus(false);
    }
  };

  return (
    <>
      <Router>
        <Nav isUserLoggedIn={isUserLoggedIn} />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/(books|resources|articles|videos|podcasts|movies|organizations|parents)/" render={() => <ResourceContainer resources={resources} />} /> {/* https://stackoverflow.com/questions/40541994/multiple-path-names-for-a-same-component-in-react-router */}
        </Switch>
      </Router>
    </>
  );
};
export default Home;
