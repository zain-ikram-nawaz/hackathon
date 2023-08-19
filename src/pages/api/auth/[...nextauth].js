import { GetByEmail, verifypassword } from "@/service";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
 session:{
    jwt:true
 },
  providers: [
    CredentialsProvider({
        async authorize({email,password}){
            const user = GetByEmail(email)
            if(!user){
                alert("user not found")
            }
const isvalid = await verifypassword(user.password,password);
if(!isvalid){
    alert("incorrect password")
}
return{email}
        }
    })
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)