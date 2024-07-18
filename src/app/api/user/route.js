import { dbConnect } from "@/helper/db"
import { User } from "@/models/user"
import { NextResponse } from "next/server"

dbConnect()

export async function GET(request){

//     const users = [
//         {
//         name:"Garv",
//         id: 1,
//         email: "garv@gmail.com"
//     },

//     {
//         name:"swami",
//         id: 2,
//         email: "swami@gmail.com"
//     },
//     {
//         name:"hardik",
//         id: 3,
//         email: "hardik@gmail.com"
//     }
// ]

try{

    let users = []

    users = await User.find()
    const response = NextResponse.json(users)
    return response

}
catch(error){

    return NextResponse.json({
        message : "data not get from users"
    })

}


// return NextResponse.json(users)



}

export async function POST(request){

try{       
const{name, email,address, password} = await request.json()

const user = new User({
    name, email,address, password
})

const createdUser = await user.save()

const response = NextResponse.json(user,{status:201})

return response
    }

    catch(error){

        console.log(error)

        return NextResponse.json({
            message: "failed to create user",
            status: 600
        })

    }




}