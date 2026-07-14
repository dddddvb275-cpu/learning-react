
import {useQuery} from '@tanstack/react-query'
import {veri} from '../sayfa1'
import {Link} from 'react-router-dom'


function Api(){

    const {data,isLoading,error}=useQuery({
        queryKey:['Hello'],
        queryFn:()=>veri()

    });

    if(isLoading) return <h1>Sayfa yukleniyor</h1>
    
    if(error) return <h1>Hata sayfa çekilememiş</h1>

   const url="https://image.tmdb.org/t/p/w500";
     

   return(
    <div className="flex ml-[220px] w-[1100px] bg-gray-700 flex-row flex-wrap gap-5  p-[13px] items-center justify-center">

        {data.results.map((x,y)=>(

        <Link to={`/detay/${x.id}`} key={y}> 
        <div className="w-[170px] border-[6px] p-[9px]">
            <img src={`${url}${x.poster_path}`} alt="img"/>
            
        </div>
        </Link>
        ))}
    </div>
   );

}
export default Api;
    