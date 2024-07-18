import { getResponse } from "@/helper/responseMessage"
import { Task } from "@/models/task"
import { NextResponse } from "next/server"

export async function GET(request){

    try {
        const task = await Task.find()
        return NextResponse.json(task)
    }
    catch(error){
        return getResponse("fetch data failed",200,false )
    }
    
}

export async function POST(request){

    // const r = await request.json()

    // const task = new Task({
    //     title: r.a,
    //     content: r.b,
    //     addedDate: r.c,
    //     status: r.d,
    //     userId: r.w
    // })

    // console.log(task)

    // console.log(title,content,addedDate,status,userId)

    const{title,content,status} = await request.json()
    try{

        const task = new Task({
            title,
            content,
            status
        })
    
        task.save()
    
        return NextResponse.json({
            message: "Task Created Sucessfully"
        })

    }
    catch(error){
        return NextResponse.json(error)
    }
    
}