import { getDetailed } from "@/service/detail"

export default function handlerr(req, res) {
    
    if(req.method==="GET"){
        
       const detailedData= getDetailed()
            
        return res.status(200).json(detailedData)
    }
    res.status(200).json()
  }