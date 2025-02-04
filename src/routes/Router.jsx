// Router.jsx

import { Routes, Route } from 'react-router-dom';
import App from '../App';
// Import any other components you need for routing

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      
    </Routes>
  );
};

export default Router;
