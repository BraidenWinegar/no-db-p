import React from 'react'
import axios from 'axios'



class Header extends React.Component {
    constructor(){
        super();

        this.state ={
            weather: {},
            apiKey: "0e7e0689dc2ea470a52f0549eecaf4f1"
        }


    }

    componentDidMount(){
        axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=84043,us&APPID=${this.state.apiKey}`)
        .then(res => {
            this.setState({
                weather: res.data
            })
        })
        .catch(err => {
            console.log(err, 'weater')
        })
        console.log(this.state.weather)
    }

    labelName = () => {
        
        this.props.labelNameFn(prompt('Enter new Category'))
    }

    render(){
        let locImg = (<div></div>)
        // if(this.state.weather.weather.main === 'Clear'){
        //     locImg = (<img src="https://aisaichiinternationalschool.files.wordpress.com/2013/12/5-free-summer-clipart-illustration-of-a-happy-smiling-sun.jpg"/>) 
        // }
        return(
            <header>
            <div id='logo'>{this.locImg} </div>
            <h1> Progress Tracker </h1>
            <div><button id="add-category" onClick={this.labelName} >
                <b>Add Category</b></button></div>
            </header>
        )
    }
}


export default Header