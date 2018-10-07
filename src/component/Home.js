import React, { Component } from "react";
import PostList from "./PostList";
import ProductForm from "./ProductForm";

export default class Home extends Component {
  render() {
    return (
      <div style={{ color: "red" }}>
        <p>Home</p>
        <ProductForm />
        {/* <PostList /> */}
      </div>
    );
  }
}
