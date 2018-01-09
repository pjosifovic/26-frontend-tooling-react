'use strict';

import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import {say, tux} from 'cowsay';
import faker from 'faker';


class Cow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
    this.state.content = "click button above";
    this.click = this.click.bind(this);
  }

  click() {
    const content = faker.hacker.phrase();
    this.setState({ content })
  }

  render() {
    return (
      <div>
        <button onClick={this.click}>click me</button>
        <div>{say({ text: this.state.content })}</div>
      </div>
    )
  }
}

ReactDom.render(<Cow/>, document.getElementById('root'))