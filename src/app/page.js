"use client"
import MyComp from "./MyComp"
import { usePathname } from "next/navigation"
import Link from "next/link";

export default function Home() {
  const pathName=usePathname();
  console.log('You are at',pathName)
  return (
    <>
    <MyComp />
    <Link href={"/users/champ"}>Click me</Link>
    </>
  )
}
