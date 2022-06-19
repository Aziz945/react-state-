import React, { useState ,Component } from 'react';
import './App.css';





class Welcome extends React.Component {
  

  constructor () {
    
    ////////////////////////////////////////////////::
    
    console.log('constructor()')
    super(constructor)
    this.state = {
      fullName : 'Aziz Mlika ',
      bio : 'Time is precious, waste it wisely.',
      imgSrc : <img className='Image' src='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg&q=60' alt='not found' ></img>,
      profession : 'web dev',
      boolean : true,
      currentCount: 0
    }
    
  }
  // the interval
  timer() {
    this.setState({
      currentCount: this.state.currentCount +1
    })
    if(this.state.currentCount < 1) { 
      clearInterval(this.intervalId);
    }
  }
  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1000);
  }
  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

 
//  the button
statless = () => {
  this.setState({currentCount:0})
  this.setState({boolean : !this.state.boolean})
}

  render() {
    
    return (
 <div className='appStyle'> 
{this.state.boolean  ? (
      <>  
      
      {this.state.fullName}
      <div className='spacer'></div>
      
      {this.state.bio}
      <br></br>
      {this.state.profession}
      <br></br>
      
      {this.state.imgSrc}
      <br></br>
      
      
      </>
):(<></>)}

      
      <div>{this.state.currentCount}</div>
      <button className='btn'  onClick={this.statless}  > Show/Hide </button>
      
      
      
      
        
        
  
 </div>

         

    )
  }
}

export default Welcome ; 





