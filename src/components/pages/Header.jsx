import React from 'react'
import { imgPath } from '../helpers/functions-general'
import { Search } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="bg-primary">
        <div className=" container flex justify-between items-center  text-white">
          <div className="flex items-center gap-10">
            <img src={`${imgPath}/header-logo.png`} alt="" />
            <ul className="flex gap-4">
              <li>TV Shows</li>
              <li>Movies</li>
              <li>Recently Added</li>
              <li>My List</li>
            </ul>
          </div>

          <Search />
        </div>
      </div>
    </header>
  );
}

export default Header