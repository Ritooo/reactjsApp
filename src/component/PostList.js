import React, { Component } from "react";
import axios from "axios";
import "./PostList.css";

export default class PostList extends Component {
  state = {
    posts: [],
    className: "btn",
    isActive: false
  };

  constructor(props) {
    super(props);
    this.getDetail = this.getDetail.bind(this);
    this.changeTab = this.changeTab.bind(this);
  }

  getDetail(e, id) {}

  changeTab() {
    if (this.state.isActive) {
      this.setState({ isActive: false });
    } else {
      this.setState({ isActive: true });
    }
  }
  componentWillMount() {
    this.getData();
  }

  getData() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      const posts = res.data;
      this.setState({ posts: posts });
    });
  }

  render() {
    let isActive = this.state.isActive;
    if (isActive) {
      return (
        <div>
          <input type="button" onClick={this.changeTab} value="Change" />
          <ul>
            {this.state.posts.map(item => (
              <li
                id={item.id}
                className={this.state.className}
                onClick={e => this.getDetail(e, item.id)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          {" "}
          <input type="button" onClick={this.changeTab} value="Change" />{" "}
          Nothing
        </div>
      );
    }
  }
}
