import React, { useContext, useState } from "react";
import { Block } from "baseui/block";
import { Link } from "react-router-dom";
import { StyledLink } from "baseui/link";
import { withRouter } from "react-router";
import theme from "../state/actions/theme";
import { BiAdjust } from "react-icons/bi";
import { AES } from "crypto-js";
import { Context } from "../state/store";
import { def } from "../config/const";
import ObjectValidator from "../helper/objectValidator";
import { Button, SHAPE } from "baseui/button";
import {
  AiOutlineMail,
  AiOutlineKey,
  AiOutlineCaretLeft,
} from "react-icons/ai";
import { Input } from "baseui/input";
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem,
} from "baseui/header-navigation";

const Login = (props) => {
  const [state, dispatch] = useContext(Context);
  const [identity, setId] = useState("");
  const [identity_register, setregisterId] = useState("");
  const [hideForm, registerForm] = React.useState(false);
  const [error, setError] = useState({});
  const [key, setKey] = useState("");
  const [key_register, setregisterKey] = useState("");
  const [progress, setIsProgress] = useState(false);

  const validate = () => {
    const schema = {
      identity: {
        require: () => (!!identity ? "" : `email is required`),
      },
      key: {
        require: () => (!!key ? "" : `password is required`),
      }
    };
    let error = ObjectValidator(schema);
    setError(error);
    return error;
  };

  const validate_register = () => {
    const schema = {
      identity_register: {
        require: () => (!!identity_register ? "" : `email is required`),
      },
      key_register: {
        require: () => (!!key_register ? "" : `password is required`),
      },
    };
    let error = ObjectValidator(schema);
    setError(error);
    return error;
  };

  const submit = () => {
    if (!!validate()) return;

    setIsProgress(true);
    let inputParam = {
      username: identity,
      password: AES.encrypt(key, def.keyParse).toString(),
    };
    // console.log("AES PASS: ", def.keyParse);
    console.log("AES PASS: ", inputParam.password);
  };

  const submit_register = () => {
    if (!!validate_register()) return;

    setIsProgress(true);
    let inputParam = {
      username: identity_register,
      password: AES.encrypt(key_register, def.keyParse).toString(),
    };
    // console.log("AES PASS: ", def.keyParse);
    console.log("AES PASS: ", inputParam.password);
  };

  const register = () => {
    setError({});
    registerForm(!hideForm);
  };

  const changeTheme = () => {
    console.log(state);
    if (state.theme.theme === "light") {
      theme.setTheme(dispatch, "dark");
    } else {
      theme.setTheme(dispatch, "light");
    }
  };

  return (
    <Block>
      <Block className="ex__header">
        <HeaderNavigation
          overrides={{
            Root: {
              style: ({ $theme }) => ({
                borderBottomWidth: "0px",
              }),
            },
          }}
        >
          <Block className="container-5 w-container">
            <StyledNavigationList $align={ALIGN.center} />
            <StyledNavigationList $align={ALIGN.right}>
              <StyledNavigationItem>
                <StyledLink className="ex__backto" href="/">
                  <AiOutlineCaretLeft /> Back HomePage
                </StyledLink>
              </StyledNavigationItem>
            </StyledNavigationList>
            <StyledNavigationList $align={ALIGN.right}>
              <StyledNavigationItem>
                <BiAdjust
                  onClick={(e) => changeTheme()}
                  size={27}
                  className={`btn-${
                    state.theme.theme === "light" ? "light" : "dark"
                  }`}
                  style={{ cursor: "pointer" }}
                />
              </StyledNavigationItem>
            </StyledNavigationList>
          </Block>
        </HeaderNavigation>
      </Block>
      <Block className="ex__container container mt-5">
        <Block className="d-flex justify-content-center position-relative">
          <Block className="ex__wrapper__left">
            <Block
              className={`ex__wrapper__register ${hideForm ? "active" : ""} ${
                state.theme.theme === "light" ? "light" : "dark"
              }`}
            >
              <Block className="ex__wrapper__form">
                <Block className="ex__title">
                  <h4>Register Your Account</h4>
                </Block>
                <Block className="form-box">
                  <label>enter your email address (required)</label>
                  <Input
                    type="email"
                    value={identity_register}
                    error={!!error.identity_register ? true : false}
                    onChange={(e) => setregisterId(e.target.value)}
                    placeholder=""
                    startEnhancer={() => <AiOutlineMail size={21} />}
                    overrides={{
                      Root: {
                        style: ({ $theme }) => ({
                          borderWidthBottom: "2px",
                          borderBottomStyle: "solid",
                          borderBottomColor: "#000",
                        }),
                      },
                    }}
                    clearOnEscape
                  />
                  <span className="error__helper">
                    {error.identity_register}
                  </span>
                </Block>
                <Block className="form-box">
                  <label>enter your password (required)</label>
                  <Input
                    value={key_register}
                    onChange={(e) => setregisterKey(e.target.value)}
                    error={!!error.key_register ? true : false}
                    placeholder=""
                    type="password"
                    startEnhancer={() => <AiOutlineKey size={21} />}
                    overrides={{
                      Root: {
                        style: ({ $theme }) => ({
                          borderWidthBottom: "2px",
                          borderBottomStyle: "solid",
                          borderBottomColor: "#000",
                        }),
                      },
                    }}
                    clearOnEscape
                  />
                  <span className="error__helper">{error.key_register}</span>
                </Block>
                <Block className="form-btn">
                  <Button
                    shape={SHAPE.pill}
                    overrides={{
                      BaseButton: {
                        style: ({ $theme }) => ({
                          width: "60%",
                          textTransform: "uppercase"
                        }),
                      },
                    }}
                    isLoading={progress === true ? true : false}
                    isSelected={progress === true ? true : false}
                    onClick={() => submit_register()}
                  >
                    Register
                  </Button>
                </Block>
                <Block className="form-footer">
                  <p>
                    Already have account ?{" "}
                    <Link onClick={() => register()} to="#">
                      login here
                    </Link>
                  </p>
                </Block>
              </Block>
            </Block>
          </Block>
          <Block className="ex__wrapper__right">
            <Block
              className={`ex__wrapper ${hideForm ? "hide" : ""} ${
                state.theme.theme === "light" ? "light" : "dark"
              }`}
            >
              <Block className="ex__wrapper__form">
                <Block className="ex__title">
                  <h4>Login to Your Account</h4>
                </Block>
                <Block className="form-box">
                  <label>enter your email address (required)</label>
                  <Input
                    type="email"
                    disabled={hideForm ? true : false}
                    value={identity}
                    error={!!error.identity ? true : false}
                    onChange={(e) => setId(e.target.value)}
                    placeholder=""
                    startEnhancer={() => <AiOutlineMail size={21} />}
                    overrides={{
                      Root: {
                        style: ({ $theme }) => ({
                          borderWidthBottom: "2px",
                          borderBottomStyle: "solid",
                          borderBottomColor: "#000",
                        }),
                      },
                    }}
                    clearOnEscape
                  />
                  <span className="error__helper">{error.identity}</span>
                </Block>
                <Block className="form-box">
                  <label>enter your password (required)</label>
                  <Input
                    value={key}
                    disabled={hideForm ? true : false}
                    onChange={(e) => setKey(e.target.value)}
                    error={!!error.key ? true : false}
                    placeholder=""
                    type="password"
                    startEnhancer={() => <AiOutlineKey size={21} />}
                    overrides={{
                      Root: {
                        style: ({ $theme }) => ({
                          borderWidthBottom: "2px",
                          borderBottomStyle: "solid",
                          borderBottomColor: "#000",
                        }),
                      },
                    }}
                    clearOnEscape
                  />
                  <span className="error__helper">{error.key}</span>
                </Block>
                <Block className="form-btn">
                  <Button
                    shape={SHAPE.pill}
                    overrides={{
                      BaseButton: {
                        style: ({ $theme }) => ({
                          width: "60%",
                          textTransform: "uppercase",
                        }),
                      },
                    }}
                    isLoading={progress === true ? true : false}
                    isSelected={progress === true ? true : false}
                    onClick={() => submit()}
                  >
                    Login
                  </Button>
                </Block>
                <Block className="form-footer">
                  <p>
                    Don't have account ?{" "}
                    <Link onClick={() => register()} to="#">
                      register here
                    </Link>
                  </p>
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
        <Block className="ex__background__wrapper">
          <div
            className={`ex__shape ex__shape__background ${
              state.theme.theme === "light" ? "light" : "dark"
            }`}
          ></div>
        </Block>
      </Block>
    </Block>
  );
};

export default withRouter(Login);
