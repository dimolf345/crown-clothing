import React, {Component} from "react";
import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss';


const sections = [
  {
    title: 'hats',
    imageUrl: 'https://picsum.photos/id/238/200/300',
    id: 1,
    linkUrl: 'shop/hats'
  },
  {
    title: 'jackets',
    imageUrl: 'https://picsum.photos/id/239/200/300',
    id: 2,
    linkUrl: 'shop/jackets'
  },
  {
    title: 'sneakers',
    imageUrl: 'https://picsum.photos/id/240/200/300',
    id: 3,
    linkUrl: 'shop/sneakers'
  },
  {
    title: 'womens',
    imageUrl: 'https://picsum.photos/id/241/200/300',
    size: 'large',
    id: 4,
    linkUrl: 'shop/womens'
  },
  {
    title: 'mens',
    imageUrl: 'https://picsum.photos/id/242/200/300',
    size: 'large',
    id: 5,
    linkUrl: 'shop/mens'
  }
];




 class Directory extends Component {
     constructor() {
         super()
         this.state = {
            sections: sections
         }
     }

     render() {
         return (
             <div className="directory-menu">
                 {this.state.sections.map(({title, imageUrl, id, size})=> {
                     return (
                         <MenuItem key={id} title={title} size={size} imageUrl={imageUrl}/>
                     )
                 })}
             </div>
         )
     }
 }


export default Directory;