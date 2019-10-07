import React, {Component} from 'react'
import axios from 'axios'
import LabelBox from './LableBox';


class CategoryDisplay extends Component{
    constructor(){
        super();

        this.state ={
            labels: [],
            value: 'This is in CategoryDislplay'
        }

        this.addLabel = this.addLabel.bind(this)
    }

    componentDidMount(){
        axios.get('/api/labels')
        .then(res =>{
            this.setState({
                labels: res.data
            })
        })
        .catch(err => alert(err, 'get didMount'))

        this.props.grabLabelNameFn(this.addLabel)
    }

    makeLabel = () => {
        axios.post('/api/label',{
            name: prompt('please enter category name'),
            goals: []
        }).then (res => {
            this.setState({
                labels: res.data
            })
        })
        .catch(err => alert(err, 'post makelabel'))
    }

    editLabelTitle = (index, newName) => {
        axios.put(`/api/label/${index}`, {newName})
        .then(res => {
            this.setState({
                labels: res.data
            })
        })
        .catch(err => alert(err, 'post editlabel'))
    }

    deleteLabel = ( index) => {
        axios.delete(`/api/label/${index}`)
        .then(res => {
            this.setState({
                labels: res.data
            })
        })
        .catch(err => alert(err, 'delete deletelabel'))
    }

    addGoal = (index, GoalName) => {
        axios.post(`/api/goal/${index}`, {name: GoalName, 
            progress:[false, false, false, false, false, false, false, false, false, false]})
        .then(res => {
            this.setState({
                labels: res.data
            })
        })
        .catch(err => alert(err, 'post addGoal'))
    }

    editGoalName = (index,  keyId, goalName) => {
        axios.put(`/api/goal/${index}`, {keyId, goalName})
        .then(res => {
            this.setState({
                labels: res.data
            })
        })
        .catch(err => alert(err, 'editgoalname'))
    }

    deleteGoal = (index, keyId) => {
        axios.delete(`/api/goal/${index}/${keyId}`)
        .then(res => {
            this.setState({
                labels: res.data
            })
        })
        .catch(err => alert(err, 'deletgoal'))
        
    }

    toggleDay = (index, keyId, daysKey) =>{
        axios.put(`/api/day/${index}/${keyId}/${daysKey}`)
        .then(res => {
            this.setState({
                labels: res.data
            })
        })
        .catch(err => alert(err, 'put toggleday'))
    }

    //////////////////
    addLabel(labelName) {
        console.log(labelName)
        console.log(this.state.value)
        axios.post('/api/label',{name: labelName, goals: []})
        .then(res => {
            this.setState({
                labels: res.data
            })
        })
        .catch(err => alert(err, ' addLabel'))
        }

    render(){
        const labelList = this.state.labels.map((e, i) => {
            return (
                <LabelBox 
                    editLabelTitleFn={this.editLabelTitle}
                    deleteLabelFn={this.deleteLabel}
                    addGoalFn={this.addGoal}
                    editGoalName={this.editGoalName}
                    deleteGoal={this.deleteGoal}
                    toggleDay={this.toggleDay}
                    label={e} 
                    index={i}/>
            )
        })
        return(
            <section id='category-display'>
                {labelList}
            </section>
        )
    }
}

export default CategoryDisplay;