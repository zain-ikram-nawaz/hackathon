import { useRef } from "react";
import Link from "next/link";
function Form({Signin,onFormSubmit}){
    const emailRef=useRef()
    const passwordRef=useRef()
    function onSubmitHandler (e){
      const email =emailRef.current.value
      const password =passwordRef.current.value
      e.preventDefault();
      onFormSubmit(email,password);
  
    }
return(
    <>
    
    <form onSubmit={onSubmitHandler} className="main-form">
<div><input type="email" placeholder="Email" ref={emailRef}/></div>
<div>
<input type="password" placeholder="Password" ref={passwordRef}/>

</div>
<div>
<button type="submit" className="btn">submit</button>

</div>
               <p>
               <Link
                  href={Signin ? "./signup" : "./signin"}
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  {Signin
                    ? "Do not have an account? Signup"
                    : "Already have an account? Sign in"}
                </Link>
               </p>
    </form>
    </>
);

};

export default Form;