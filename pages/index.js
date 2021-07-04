import React from 'react';
import { Navbar } from '../src/layout/Navbar';
import { MainContent } from '../src/main/MainContent'

export default function Index() {
  return (
    <Navbar
      title={'Main'}
    >
      <MainContent/>
    </Navbar>
  );
}
