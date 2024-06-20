import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FoodProvider } from './contexts/FoodContext';
import HomePage from './pages/HomePage/HomePage';
//import FoodDetailsPage from './pages/FoodDetailsPage';

const App: React.FC = () => {
  return (
    <FoodProvider>
      <Router>
        <Switch>
          <Route path="/"  Component={HomePage} />
          {/* <Route path="/food/:id" Component={FoodDetailsPage} /> */}
        </Switch>
      </Router>
    </FoodProvider>
  );
};

export default App;
