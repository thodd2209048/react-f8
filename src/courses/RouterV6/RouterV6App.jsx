import React from 'react';
import HomePage from './Home';
import NewsPage from './News';
import ContactPage from './Contact';
import { Link, Route, Routes } from 'react-router-dom';

RouterV6App.propTypes = {};

function RouterV6App(props) {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default RouterV6App;
