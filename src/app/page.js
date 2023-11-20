"use client"
import { usePathname } from "next/navigation"
import Link from "next/link";
import { signIn,signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const {status,data:session}=useSession();
  const pathName=usePathname();
  console.log('You are at',pathName)
  return (
    <>
    
    <br /><br /><br />
    <Link href={"/users/champ"}>Look at products</Link>
    <br /><br />
    <br />  

    {/* {status=='authenticated'?<Link src={session?.user?.image} height={50} width={50}/>:<></>} */}
    {/* {console.log(session.user.name)} */}
    <Image src={session?.user?.image} width={40} height={40} style={{borderRadius:'20px'}} alt={session?session?.user?.name:'Not logged in'} />
    {/* <img  /> */}
    <p>{session?.user?.name}</p>
    {status=="authenticated"?<>
    <button onClick={()=>signOut()}>LogOut</button>
    </>:(status=='loading' ?<><button>Loading...</button></>:<button onClick={()=>signIn('google')}>Sign in</button> )}
    
    <br /><br />
    </>
  )
}
