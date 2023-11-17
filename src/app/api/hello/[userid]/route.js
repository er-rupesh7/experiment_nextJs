import { NextResponse } from "next/server";
import { bio_data } from "../data"
export function GET(req,con){
    let userid=con.params.userid;
    let test=/^[0-9]+$/.test(userid) && userid!=0;
    let filteredData=bio_data.filter((item)=>item.userid==userid);
   if(test){
    return userid>bio_data.length? NextResponse.json({404:'Not Found'},{status:404}):NextResponse.json(filteredData[0],{status:200})
   }
   else{
    return NextResponse.json({access:'denied'},{status:403})
   }
}