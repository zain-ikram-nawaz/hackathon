import Link from "next/link"
import Form from "./form"
import {signIn} from "next-auth/react"
function Signin(){
async function onSubmit(email,password){
const data =await signIn('credentials',{redirect:false,email,password})
console.log(data)
}

return <>

<Link href="./profile"><h1>profile</h1> </Link>
<h2 className="log-heading">signin</h2>
<Form Signin={true} onFormSubmit={onSubmit}/>
</>
}

export default Signin;