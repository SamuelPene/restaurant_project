import React from 'react';
import { Landing, Menu, About, Contact } from './Pages/index';
import './Stylesheet/website.css';

function Website() {
  return (
    <main className="website__container">
      <Landing />
      <Menu />
      <About />
      <Contact />
    </main>
  );
}

export default Website;
