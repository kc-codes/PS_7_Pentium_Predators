// ErrorPage.jsx
import React from 'react';

const ErrorPage = ({ errorMessage }) => {
  return (
    <div>
      <h2>Error Page</h2>
      <p>{errorMessage}</p>
      {/* Add any additional content or styling as needed */}
    </div>
  );
}

export default ErrorPage;
