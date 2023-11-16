import React from 'react'
import Button from './Button';

async function  myFetch(){
    let newp= await fetch("https://dummyjson.com/product")
    let data=await newp.json();
    return data
}

async function page({params}) {
   let data=await myFetch();
   
  return (
    <div>
      {data.products.map((value)=>{return <>{value.title} <Button item={value.price}></Button> <br /></>})}
    </div>
  )
}
export function generateMetadata( ){
    return {
        title:"Users page champion",
        description:"I m god of the page"
    }

}

export default page
