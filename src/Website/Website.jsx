import React from 'react';
import { Landing, Menu, About, Contact } from './Pages/index';
import './Stylesheet/website.css';

function Website() {
  return (
    <main className="website-container">
      <b>{'<-- Website Start -->'}</b>
      <Landing />
      <Menu />
      <About />
      <Contact />
      <b>{'<-- Website End -->'}</b>
    </main>
  );
}

export default Website;
