import React from 'react'
import { useSession, signOut } from 'next-auth/react'

const account = () => {
    const {data: session, status} = useSession({required: true})
   if(status === "authenticated"){
       return (
           <div>
               {session.user?.name}
           </div>
       )
   }else{
    return (
        <div>your not sign in</div>
      )
   }
}

export default account