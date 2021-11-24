import React, { ReactElement } from 'react';
import DefaultLayout from '../layouts/default/index';
import HomePage from "../containers/home/index";

interface Props {}

function index({}: Props): ReactElement {
  return (
    <>
      <DefaultLayout>
        <HomePage/>
      </DefaultLayout>
    </>
  );
}

export default index;
