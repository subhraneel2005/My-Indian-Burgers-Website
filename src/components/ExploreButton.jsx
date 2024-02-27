// HomeButton.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ExploreButton = () => {
  const location = useLocation();

  // Check if the current location is not the home page
  const isNotExplorepage = location.pathname !== '/explore';

  return isNotExplorepage ? (
    <Link to="/explore">
      <button className='bg-sky-800 text-sky-400 font-semibold text-xl p-2 select-none rounded-xl'>Back To Explore</button>
    </Link>
  ) : null;
};

export default ExploreButton;
