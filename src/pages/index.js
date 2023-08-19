

import { getAll } from "@/service/blogs";
import Image from "next/image";
import Link from "next/link";


export async function getStaticProps(){
const data = await getAll()

return {
  props:{
    blogs:data
  }
}
}

function home({blogs}){
  
  return(
    <div>
   
   {blogs.map(item=>{
    return(
      <div key={item.id} className="home-blogs">
        <h2 >{item.title}</h2>
        <Image src={item.imageSrc} width={200} height={200} alt="my photo"/>
        <p>{item.date}</p>
        <p>{item.blogs}</p>
      <Link href="/profile">see all from this user</Link>

      </div>
    )
   })}
    </div>
  )
}
export default home;
