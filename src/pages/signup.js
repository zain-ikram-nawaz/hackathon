import Form from "./form"

function Signup(){
async function onSubmit(email,password){
const data = await fetch("/api/auth/signup",{
    method:"POST",
    body:JSON.stringify({email,password}),
    headers:{
        "Content-Type":"application/json"
    }
})
if(data.ok){
    alert("signup succefful")
}
}

return(
<>
<h2>Signup</h2>
<Form signin={false} onFormSubmit={onSubmit}/>

</>
)
}

export default Signup;