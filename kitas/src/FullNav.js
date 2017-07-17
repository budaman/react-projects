import React, {Component} from 'react';


class FullNav extends Component {

   render() {

      var pages = this.props.pages.map((page, i)=>{
         return (
            <li
               key={i}
               className="pages"
               >{page.toUpperCase()}</li>
         )
      })


      return (
         <nav className={'navMenu ' + (this.props.navOn ? "navMenuOn" : "navMenuOff")}>
         <ul>
            {pages}
         </ul>
         <div
            className="close"
            onClick={this.props.handleClick}
            >
               X
         </div>
      </nav>
   )
   }
}

export default FullNav;
