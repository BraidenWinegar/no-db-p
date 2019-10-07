import React, {Component} from 'react'
import CheckedBox from './CheckedBox'



export default class GoalBox extends Component{
    constructor(props){
        super(props);
    }

    editGoalName = () => {
        let goalName = prompt('enter a new name for the goal')
        this.props.editGoalName(this.props.index, this.props.keyId, goalName)
        
    }

    deleteGoal = () => {
        this.props.deleteGoal(this.props.index, this.props.keyId)
    }

    render(){
        
        const goalsList = this.props.progress.map((e, i) => {
                return <CheckedBox 
                    index={this.props.index} 
                    keyId={this.props.keyId}
                    daysKey={i}
                    toggleDay={this.props.toggleDay} 
                    taskCompleted={e}/>
        })
        return(
            <div className='goal-box'>
                <div className='goal-header'>
                    <h4 onClick={this.editGoalName}>{this.props.name}</h4>
                </div>
                <div >
                    {goalsList}
                </div>
                <img onClick={this.deleteGoal} src="https://tse2.mm.bing.net/th?id=OIP.TG3QGNq75mPOFYVeU5nUpgAAAA&pid=Api&w=181&h=181&dpr=1.25"></img> 
            </div>
        )
    }
}