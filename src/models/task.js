import mongoose, {Schema} from 'mongoose'

const taskSchema = new Schema({
    title: {type: String},
    content: {type: String},
    addedDate: {type: Date, default: Date.now()},
    status: {type: String, enum: ["pending","completed"], default: "pending"},
    userId: {type: mongoose.ObjectId}
})

export const Task = mongoose.models.tasks || mongoose.model("tasks",taskSchema);