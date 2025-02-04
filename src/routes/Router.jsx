// Router.jsx

import { Routes, Route } from 'react-router-dom';
import App from '../App';
import Root from '../layouts/Root';
// Import any other components you need for routing

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Root/>} />
      
    </Routes>
  );
};

export default Router;
