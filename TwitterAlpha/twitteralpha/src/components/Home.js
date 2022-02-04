import React from 'react';
import LeftSidebar from './LeftSidebar';
import Feed from './Feed';
import RightSidebar from './RightSidebar';

function Home() {
  return (
    <div className="app">
      <LeftSidebar />
      <Feed />
      <RightSidebar />
    </div>
  );
}

export default Home;
