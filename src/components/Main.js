require('normalize.css/normalize.css');
require('styles/App.css');
require('styles/App3.css');
require('styles/app2.less');

import React, { Component } from 'react'
let yeomanImage = require('../images/yeoman.png');

class AppComponent extends Component {
    render() {
        return (
            <div className="index">
              <img src={ yeomanImage } alt=""/>
              <div className="hello">hello world 666</div>
              <div className="word">hello world 666</div>
              <div className="test">test autofixer</div>
            </div>
        )
    }
}
AppComponent.defaultPros = {};
export default AppComponent


