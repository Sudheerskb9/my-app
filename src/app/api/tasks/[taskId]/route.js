import { getResponse } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export async function GET(request,{params}){
    const {taskId} = await params

    try {
        const task = await Task.findById(taskId)
        return NextResponse.json(task)
    }
    catch(error){
        console.log(error)
        return getResponse("fetch data failed",200,false )
    }
    
}

export async function PUT(request,{params}){
    const {title,content,userId,status} = await request.json()
    try{
        const {taskId} = params
        const task = await Task.findById(taskId)
        task.title = title,
        task.content = content,
        task.userId = userId,
        task.status = status

        const updateTask = await task.save()
        return NextResponse.json(updateTask)
    }
    catch(error){
        return getResponse("data not updated",500,false)
    }
    
}

export async function DELETE(request,{params}){
    try{
        const {taskId} = params
        const delTask = await Task.deleteOne({_id:taskId})
        return NextResponse.json(delTask)
    }
    catch(error){
        console.log(error)
        return getResponse("task deletion faliure", 500, false)
    }
    
}