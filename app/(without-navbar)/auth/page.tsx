// TODO: implement authentication page
'use client'

import Login from "@/components/auth/login";
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
 
function Search() {
  const searchParams = useSearchParams()
 
  return <input placeholder="Search..." />
}

export default function Auth() {
    return (
      <Suspense>
        <Login />
      </Suspense>
    );
}