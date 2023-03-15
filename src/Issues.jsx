import React from "react";

import Table from "react-bootstrap/Table";
import { BsRecordCircle } from "react-icons/bs";
import imageicon from "./gitiocon.png";
import "./App.css";
import { Link } from "react-router-dom";

const styles = {
  fontSize: "14px",
};

    const handleClick = () => {
        window.open('https://bobbyhadz.com','_blank');
      };
 

const Issues = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {" "}
      <ul className="list-group mb-4">
        {posts.map((post) => (
          <li as={Link } to="https://github.com/reactjs/reactjs.org/issues"
            key={post.id}
            className="list-group-item"
            onClick={()=>{
                window.location.replace(`https://github.com/reactjs/reactjs.org/issues/${post.number}`);
            }}
            name={post.number}
          >
            <img src={imageicon} alt="" /> <b>{post.title}</b>
            <p style={styles}> #{post.number}</p>
          </li>
        ))}
      </ul>
      
    </>
  );
};

export default Issues;
