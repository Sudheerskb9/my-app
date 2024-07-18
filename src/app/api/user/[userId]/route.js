import { User } from "@/models/user";
import { NextResponse } from "next/server";

// export function DELETE (request, {params}){

//     console.log(params)
//     return NextResponse.json({
//         message: "testing delete"
//     })
// }

export async function DELETE(request, {params}){

    try{
        const {userId} = params
        const user = await User.deleteOne({_id: userId})
        return NextResponse.json({
            message: "user is deleted sucessfully",
            status : 200
        })
    }
    catch(error){
        return NextResponse.json()
    }
}


export async function GET(request, {params}){
    try{
        const {userId} = params
        const user = await User.findById(userId)
        return NextResponse.json(user)
    }
    catch(error){
        return NextResponse.json({
            message: "can not get user by id",
            status : 500
        })
    }
}

export async function PUT(request,{params}){

    const{name, email,address, password} = await request.json()
    
    try{

        const {userId} = params
        const user = await User.findById(userId)
        user.name = name
        user.email = email,
        user.address = address,
        user.password = password

        const updateUser = await user.save()

        return NextResponse.json(updateUser)
    }
    catch(error){
        return NextResponse.json({
            message: "error is coming in update",
            status: 500
        })
    }
}