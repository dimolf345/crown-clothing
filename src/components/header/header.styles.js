import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

//use css element from styled-components library to
//share css code between styled components as depicted
//below
const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}//to paste css code inside
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

//styled component starting from another component
//instead of classic HTML element
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
