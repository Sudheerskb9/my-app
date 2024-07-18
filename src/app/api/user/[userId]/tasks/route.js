import { getResponse } from "@/helper/responseMessage"
import { Task } from "@/models/task"
import { NextResponse } from "next/server"

export async function GET(request,{params}){

const {userId} = params
// console.log(params)

try{
    const user = await Task.find({userId:userId})
    return NextResponse.json(user)
}

catch(error){

    return getResponse("get fetch task by particular id", 500, false)

}

}