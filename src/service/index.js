import fs from "fs";
import path from "path";
import { compare, hash } from "bcryptjs";

const filePath = path.join(process.cwd(),"src","database","data.json");

export function giveData(){
    const data = fs.readFileSync(filePath)
    return(JSON.parse(data))
}

export function GetByEmail (email) {
    const data = giveData();
    return data.find(p => p.email.toLowerCase() === email.toLowerCase());
}

export async function verifypassword (hashedpass,password){
    const isvalid = await compare(password,hashedpass);
    return isvalid;
}
export async function addAccount (email,password){
const data = giveData()
const hashedpass = await hash(password,12)
data.push({
    id:data.length + 1,
email,
password:hashedpass
});
fs.writeFileSync(filePath,JSON.stringify(data))

return (data)
}