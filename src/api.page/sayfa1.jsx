


    const apiKey = import.meta.env.VITE_API_KEY;
export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: apiKey
  }
};


  export const veri=async(id=null)=>{   

    const url=id ?
    
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`:
    'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
    
    
    const load=await fetch(url, options);

if(!load.ok){
    throw new Error ("film apisi çekilemedi");
}

return await load.json();
}

