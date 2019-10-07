const labels =[
    {
        name: "Physical",
        goals: [
            {
                name: "Pushups",
                progress: [true, true, true, true, false, false, true, false, false, false]
            },
            {
                name: "Eat Real Meat",
                progress: [true, true, true, true, false, false, true, false, false, false]
            },
            {
                name: "Sit Ups",
                progress: [true, true, true, true, false, false, true, false, false, false]
            }
        ]
    },
    {
        name: "Social",
        goals: [
            {
                name: "Talk to Someone",
                progress: [true, true, true, true, false, false, true, false, false, false]
            },
            {
                name: "Smile at Someone",
                progress: [true, true, true, true, false, false, true, false, false, false]
            }
        ]
    }
]


module.exports = {
    ////////////////////////////labels
    read (req, res) {
        res.status(200).send(labels);
    },
    addLabel (req, res) {
        const newLabel = req.body;     ////// needs newLabel as a full Label object
        labels.push(newLabel)
        res.status(200).send(labels)
    },
    editLabelName(req, res) {
        const {index} = req.params         ////needs index param
        const {newName} = req.body;        ////needs new name as a string in {newName: ###}
        labels[index].name = newName;
        res.status(200).send(labels)
    },
    deleteLabel(req, res) {
        const {index} = req.params;       /////needs index as a param
        labels.splice( +index, 1)
        res.status(200).send(labels)
    },

    /////////////////////read label
    readLabel (req, res){
        const {index} = req.params;
        res.status(200).send(labels[+index])
    },

    /////////////////////////goals
    addGoal (req, res) {
        const {index} = req.params 
        const newGoal = req.body;     ////// needs newGoal as a full goal object
        labels[+index].goals.push(newGoal)
        res.status(200).send(labels)
    },
    editGoalName (req, res) {
        const {index} = req.params; 
        const {goalName, keyId} = req.body;        ///////// needs {goalName:###, keyID:###}
        labels[+index].goals[+keyId].name= goalName;
        res.status(200).send(labels)
    },
    deleteGoal (req, res) {
        const {index, keyId} = req.params; 
        labels[index].goals.splice([keyId], 1)
        res.status(200).send(labels)
    },

    /////////toggle individual days
    toggleProgress (req, res) {
        
        const {index, keyId, daysKey} = req.params;
        console.log(index, keyId, daysKey)
        labels[index].goals[keyId].progress[daysKey] = !labels[index].goals[keyId].progress[daysKey]
        console.log(req.params)
        res.status(200).send(labels)
    }
}