const todoModel = require("../models/ToDoModel")

module.exports.getTodo = async (req, res) => {
    const todo = await todoModel.find()
    res.send(todo);
}


module.exports.saveTodo = async (req, res) => {
    const { text } = req.body;
    todoModel.create({ text })
        .then((data) => {
            console.log("Added successfully");
            console.log(data)
            res.send(data);
        })
}

module.exports.updateTodo = async (req, res) => {
    const { _id, text } = req.body;
    todoModel.findByIdAndUpdate(_id, { text }, { new: true })
        .then(() => res.send("Updated succesfully..."))
        .catch((e) => console.log(e))

}

module.exports.deleteTodo = async (req, res) => {
    const { _id } = req.body;
    todoModel.findByIdAndDelete(_id)
        .then(() => res.send("Deleted succesfully..."))
        .catch((e) => console.log(e))

}