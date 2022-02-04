import React from 'react';
import '../style/RightSidebar.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import VerifiedIcon from '@mui/icons-material/Verified';
import SidebarR from './SidebarR';
import SidebarRFollow from './SidebarRFollow';

function RightSidebar() {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <SearchOutlinedIcon className="widgets_searchIcon" />
        <input className="searchbar" type="text" placeholder="Search Twitter" />
      </div>
      <div className="widgets_container">
        <h2>Whats happening</h2>
        <div className="happening">
          <SidebarR text="January 1, 2022" headline="Where are the villains meeting up? Click here to find out!" popul="1,009 Tweets - Batman likes this" />
          <SidebarR text="Sports - 4 hours ago" headline="Gotham high school just won Metropolis" popul="trending with Damien Wayne" />
          <SidebarR text="Trending in Metropolis" headline="Superman just defeats Mongul" popul="Article by Clark Kent" />
          <SidebarR text="Buissness - Trending" headline="Bruce Wayne dominates the market" popul="800K Tweets" />
          <SidebarR text="The Times" headline="Lex Luther picked as the man of the year" popul="500K Tweets" />
        </div>
      </div>
      <div className="second_container">
        <h2>Who to follow</h2>
        <div className="follow">
          <SidebarRFollow headline="Bruce Wayne" name="@BruceWayne" />
          <SidebarRFollow headline="Batman" name="@ImBatman" />
          <SidebarRFollow headline="Selina Kyle" name="@CatLover" />
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
