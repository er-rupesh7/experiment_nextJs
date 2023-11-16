"use client"
import MyComp from "./MyComp"
import { usePathname } from "next/navigation"

export default function Home() {
  const pathName=usePathname();
  console.log('You are at',pathName)
  return (
    <>
    <MyComp />
    </>
  )
}
