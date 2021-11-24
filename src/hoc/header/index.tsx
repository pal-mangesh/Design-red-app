import React, { ReactElement } from 'react';
import logo from '../../images/Group 1Red-logo.svg';
import BG from '../../images/Rectangle 4bg.svg';
import MainMenu ,{IMenuItem} from "../main-menu/index";


export interface HeaderProps {
mainMenu:IMenuItem[];

}

function Header(props: HeaderProps): ReactElement {
  return (
    <>
      <div className="px-8 py-4 fixed w-full bg-cover " style={{backgroundImage:`url(${BG})`}} >
        <div className="flex py-4 relative" >
          <div className="justify-center  items-center">
            <div className="" >
              <img src={logo} /> 
            </div>
          </div>
          <div className="flex px-48  justify-center items-center">
            <div className="">
              <MainMenu mainMenu={props.mainMenu}/> </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
