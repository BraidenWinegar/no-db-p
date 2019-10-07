import React, {Component} from 'react'
import GoalBox from './GoalBox';


export default class LabelBox extends Component{
    constructor(props){
        super(props);
    }

    editLabelTitle = () => {
        let title = prompt('enter new category name')
        this.props.editLabelTitleFn(this.props.index, title)
    }

    deleteLabel = () => {
        this.props.deleteLabelFn(this.props.index)
    }

    addGoal = () => {
        let title = prompt('enter goal name')
        this.props.addGoalFn(this.props.index, title)
    }

    render(){
        
        const goalsList = this.props.label.goals.map((e,i)=>{
            return (<GoalBox 
                editGoalName={this.props.editGoalName}
                deleteGoal={this.props.deleteGoal}
                toggleDay={this.props.toggleDay}
                name={e.name}
                progress={e.progress} 
                index={this.props.index}
                keyId={i}
            />
            )
        })

        return(
            <div>
            <div className='label-header'>
            <h1 className='labelTitle' onClick={this.editLabelTitle}>
                {this.props.label.name}
            </h1> 
            <button onClick={this.addGoal}><b>Add Goal</b></button>
            <button className="delete-button" onClick={this.deleteLabel}><b>delete</b></button>
            </div>
            <div className="goal-list">
                {goalsList}
            </div>
            
            </div>
        )
    }
}