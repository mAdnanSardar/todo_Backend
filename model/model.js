import { Schema, model } from 'mongoose'


const todoSchema = Schema({   
    _id:Schema.Types.ObjectId,
    todoDescription:String,
    createdAt:Date,
    completed:Boolean
})

export default model('Todo',todoSchema)
