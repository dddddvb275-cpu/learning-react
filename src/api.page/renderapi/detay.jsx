import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {veri} from "../sayfa1"


function Rendes(){

  const url="https://image.tmdb.org/t/p/w500";
    const {id}=useParams();

    const {data,isLoading,error}=useQuery({
       
        queryKey:['gsd',id],
         queryFn:()=>veri(id)
    });

  if(isLoading) return <h1>sayfa yukleniyor </h1>
  if(error) return <h2>hata </h2>
  if(!data) return null;

return(

    <div>
        {data?.title ? <h1>{data.title}</h1> : <h1>title yuklenemedi</h1>}
        {data?.poster_path && <img src={`${url}${data.poster_path}`} alt="veri"/>}
        {data?.overview ? <p>{data.overview}</p> :<p>veri çekilemedi</p>}

    </div>
       
   
)
}
export default Rendes;