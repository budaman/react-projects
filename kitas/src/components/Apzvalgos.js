import React, {Component} from 'react';
import Nav from '../Nav';

class Apzvalgos extends Component {




   render(){


      return (
         <div className="apzvalgos-container">
            <Nav
               handleClick={this.props.handleClick}
             />
            <div>{this.props.pages[0]} </div>
         </div>
      )
   }
}


export default Apzvalgos;
