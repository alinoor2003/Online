import User from '../../../models/user';
import { NextResponse } from 'next/server';
import {promisify} from 'util';

export async function POST (req){    

    const data = await req.json ();
    const name = data.name;
    
    console.log(data);

    let nyUser = new User(data);

    nyUser.save().then(()=>{
        return  NextResponse.json({
            success:true
        })
    }).catch((e)=>{
        return  NextResponse.status(500).json({
            success:false
        })
    });

    return NextResponse.json({success:true})

}