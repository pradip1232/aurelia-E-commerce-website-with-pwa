import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found-page">
      <div className="container text-center">
        <span className="num-404">404</span>
        <h1>PAGE HAS DEPARTED</h1>
        <p>The creation or corridor you are looking for has been relocated in our archives.</p>
        <Link to="/" className="btn-home">RETURN TO ATELIER HOMEPAGE</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
