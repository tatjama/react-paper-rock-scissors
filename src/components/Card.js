import React from 'react';
 




class Card extends React.Component{

    constructor(props){
        super(props);
        this.state = {name:this.props.name}
    }

    componentWillUnmount(){
        console.log('Components cards are unmounted!')
    }
    
    render(){
        console.log(this.state.name)
        return(
            <div  onClick={()=>this.props.onClick(this.state.name)}
            className= {"icon "+this.props.name}>
          <div className="icon-bg">              
              <img src = {this.props.url} alt = {this.props.name}/>
          </div>
          </div>
        )
    }
}

export default Card;