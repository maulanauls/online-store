import React, { useContext } from "react";
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem,
} from "baseui/header-navigation";
import { Button, SIZE, SHAPE } from "baseui/button";
import { StyledLink } from "baseui/link";
import { useStyletron } from "baseui";
import { BiAdjust } from "react-icons/bi";
import { StatefulPopover, PLACEMENT } from "baseui/popover";
import { ListItem, ListItemLabel } from "baseui/list";
import { Block } from "baseui/block";
import { ChevronDown } from "baseui/icon";
import { Context } from "../state/store";
import Avatar from "avataaars";

import theme from "../state/actions/theme";

const Header = () => {
  const [css] = useStyletron();
  const [state, dispatch] = useContext(Context);
  const changeTheme = () => {
    console.log(state);
    if (state.theme.theme === "light") {
      theme.setTheme(dispatch, "dark");
    } else {
      theme.setTheme(dispatch, "light");
    }
  };
  return (
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
            <StyledLink href="/login">Log In</StyledLink>
          </StyledNavigationItem>
        </StyledNavigationList>
        <StyledNavigationList $align={ALIGN.right}>
          <StyledNavigationItem>
            <StatefulPopover
              content={() => (
                <ul
                  className={css({
                    width: "375px",
                    padding: 0,
                    margin: 0,
                  })}
                >
                  <ListItem
                    endEnhancer={() => (
                      <Button size="compact" kind="secondary" shape="pill">
                        profile
                      </Button>
                    )}
                  >
                    <ListItemLabel>Achmad maulana</ListItemLabel>
                  </ListItem>
                  <ListItem>
                    <ListItemLabel description="setup your configuration">
                      setting
                    </ListItemLabel>
                  </ListItem>
                  <ListItem>
                    <ListItemLabel description="exit safely apps">
                      log out
                    </ListItemLabel>
                  </ListItem>
                </ul>
              )}
              placement={PLACEMENT.bottomRight}
              showArrow
              renderAll
              autoFocus
              dismissOnClickOutside={true}
            >
              <Block display={["flex"]}>
                <Avatar
                  style={{ width: "53px", height: "53px" }}
                  avatarStyle="Circle"
                  topType="LongHairStraight"
                  accessoriesType="Blank"
                  hairColor="BrownDark"
                  facialHairType="Blank"
                  clotheType="BlazerShirt"
                  eyeType="Default"
                  eyebrowType="Default"
                  mouthType="Default"
                  skinColor="Light"
                />
                <ChevronDown
                  className={`btn-${
                    state.theme.theme === "light" ? "light" : "dark"
                  }`}
                  style={{ marginTop: 10 }}
                  size={34}
                />
              </Block>
            </StatefulPopover>
          </StyledNavigationItem>
        </StyledNavigationList>
        <StyledNavigationList $align={ALIGN.right}>
          <StyledNavigationItem>
            <Button
              shape={SHAPE.pill}
              overrides={{
                BaseButton: {
                  style: ({ $theme }) => ({
                    backgroundColor: "#ff7613",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }),
                },
              }}
              size={SIZE.compact}
            >
              Sign up
            </Button>
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
  );
};

export default Header;
