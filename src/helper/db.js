import mongoose from 'mongoose'
import { NextResponse } from 'next/server'
import {User} from '../models/user'
export async function dbConnect(){

    try{

        console.log(process.env.URL)
        const {connection} = await mongoose.connect(process.env.URL,{
            dbName:"Work",})

        console.log(connection)
        console.log("db Connected")

        // const user = new User({
        //     name : 'garv Rakheja',
        //     email: 'garvrakheja@gmail.com',
        //     address: "Faridabad",
        //     password: 'garv'
        // })

        // await user.save()

    }
    catch(error){
        console.log("error found")
        console.log(error)
    }
    
}