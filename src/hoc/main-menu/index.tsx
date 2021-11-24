import React, { ReactElement } from 'react';
import { Link } from 'gatsby';

export interface IMenuItem {
  title: string;
  link: string;
}
export interface MeinMenuProps {
  mainMenu: IMenuItem[];
}

function MainMenu({ mainMenu, }: MeinMenuProps): ReactElement {
  return (
    <div className="flex"> 
    {mainMenu && mainMenu.length?(  
      <ul className="flex"  >
        {mainMenu.map((item: IMenuItem, index: number) => {
          return(
          <Link key={index + item.title} to={item.link}>
            <li className="mx-8 text-white text-xs" >{item.title}</li>
          </Link>
          );
        })}
      </ul>
    ):("kkk")}
    </div>
  );
}

export default MainMenu;
