const express = require('express');
const app = express();
app.use(express.json())

const ctrl = require('./labelContoller');

app.get("/api/labels", ctrl.read);
app.post('/api/label',ctrl.addLabel);
app.put(`/api/label/:index/`, ctrl.editLabelName);
app.delete(`/api/label/:index`, ctrl.deleteLabel);

app.get('/api/label/:index', ctrl.readLabel)

app.post('/api/goal/:index', ctrl.addGoal);
app.put('/api/goal/:index', ctrl.editGoalName)
app.delete('/api/goal/:index/:keyId', ctrl.deleteGoal)

app.put('/api/day/:index/:keyId/:daysKey', ctrl.toggleProgress)


const port = 4050;
app.listen(port, () => {console.log(`server on port ${port}`)})
