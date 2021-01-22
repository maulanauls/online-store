import React, { useContext, useState } from "react";
import { Block } from "baseui/block";
import { withRouter } from "react-router";

import NavBar from "../components/header";

const PageIndex = (props) => {
  const [key, setQuery] = useState("");
  return (
    <Block>
      <Block className="ex__header">
        <NavBar />
      </Block>
      <Block className="container">
        <Block className="row justify-content-center">
          <Block className="col-md-6">
            <input
              className="ex__searchbox__item"
              onChange={(e) => setQuery(e.target.value)}
            ></input>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default withRouter(PageIndex);
