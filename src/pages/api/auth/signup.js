
  // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {addAccount} from "../../../service"
export default function handler(req, res) {
  if(req.method!=="POST"){
    return res.status(404).send();
  }
  const { email, password } = req.body;
  try{
    addAccount(email,password);
    res.status(201).send();
  }
  catch(err){
    res.status(404).json({message:err});
  }
}
