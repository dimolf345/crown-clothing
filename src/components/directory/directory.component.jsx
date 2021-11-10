import React from "react";
import MenuItem from "../menu-item/menu-item.component";
// import './directory.styles.scss';
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { DirectoryMenuContainer } from './directory.styles.jsx';

const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});


export default connect(mapStateToProps)(Directory);



// import SECTIONS_DATA from "./sections.data.js";

// import { selectDirectorySections } from "../../redux/directory/directory.selector";