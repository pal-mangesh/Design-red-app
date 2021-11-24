import { graphql, useStaticQuery } from 'gatsby';
import React, { ReactElement } from 'react';
import Header from '../../hoc/header/index';
import BG from '../../images/Rectangle 4bg.svg';

interface DefaultLayoutProps {
  title: string;
  children?: any;
}

// const mainMenu = [
//   {
//     title: 'kkkk',
//     link: '/'
//   },
//   { title: 'ldjf', link: '/' }
// ];

function DefaultLayout(props: DefaultLayoutProps): ReactElement {
  // const data = useStaticQuery(graphql`
  // query DefaultLayoutQuery {
  //   site {
  //     siteMetadata {
  //       title
  //       mainMenu {
  //         link
  //         title
  //       }
  //     }
  //   }
  // }
  // `);

  // const {title,mainMenu}=data?.site?.siteMetaData ||{};

  const data = useStaticQuery(graphql`
  query DefaultLayoutQuery {
    site {
      siteMetadata {
        title
        mainMenu {
          title
          link
        }
      }
    }
  }
`);
const { title, mainMenu } = data?.site?.siteMetadata || {};


  return (
    <>
      <Header mainMenu={mainMenu} />
      <div style={{backgroundImage:`url(${BG})` , paddingTop:"80px", maxWidth:"1500px" ,  }}  className=" h-96 p-96 ">{props.children}</div>
      <div className="">I am footer</div>
      
    </>
  );
}

export default DefaultLayout;
