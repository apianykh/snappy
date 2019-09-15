import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/LayoutComponent'; 

const mountNode = document.getElementById('root');

ReactDOM.render(<Layout />, mountNode);