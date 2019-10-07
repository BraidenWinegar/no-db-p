import React from 'react';
import './App.css';
import Header from './components/Header'
import CategoryDisplay from './components/CategoryDisplay'

class App extends React.Component {
  constructor(){
    super();

    this.state = {
   
    }
  
  }

  componentDidMount(){
    // this.labelName = labelNameFromSource
  }





  grabLabelNameFn = (callback) => {
    this.setState({
      labelNameFn: callback
    })
    

    console.log(this.state.labelNameFn)
    console.log(this.state.labelName)
  }
  
  
  render(){
    return (
      <div className="App">
        <Header labelNameFn={this.state.labelNameFn}/>
        <CategoryDisplay grabLabelNameFn={this.grabLabelNameFn}/>
      </div>
    );
  }
}

export default App;
