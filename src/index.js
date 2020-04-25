import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'; 

import Main from "./script/component/main"

//view
import './script/view/detail';
import MovieList from'./script/component/movieList';

ReactDOM.render(
    <Main/>,
  document.querySelector('main')
);

//css native
import './style/style.css';