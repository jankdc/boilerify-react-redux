import React from 'react';
import dom from 'react-dom';
import css from './main.css';

const HelloWorld = () => {
  return (
    <div>Hello, world!</div>
  );
};

dom.render(<HelloWorld />, document.querySelector('main'));
