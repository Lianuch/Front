import axios from "axios"

export const fetchTeamInfo = async ()=>{
    try{
        var respone = await axios.get("http://localhost:5165/api/Barber");
        return respone.data;
    }
    catch(e){
        console.log(e);
    }
}