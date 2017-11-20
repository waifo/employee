import React from 'react';
// import {connect} from 'react-redux'

export class Home extends React.Component<any,any>{
    
    render(){
        return (
            // <div>Working React { this.props.abc}</div>
         <button className="square">
            {this.props.value}
          </button>
        )
    }
}

