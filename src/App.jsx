import {useState} from 'react'
import Api from './api.page/renderapi/render'
import Nav from './navmenu/nav'
import {Routes,Route} from 'react-router-dom'
import Anasayfa from './anasayfa.jsx'
import Rendes from './api.page/renderapi/detay'
import Haks from './hakkimda.jsx'


function App(){

return(
    
    <div>
 <Nav/>

 <Routes>
    <Route path='/anasayfa' element={<Anasayfa/>}/>
    <Route path='/filmler' element={<Api/>}/>
    <Route path='/detay/:id' element={<Rendes/>}/>
    <Route path='/hakkimda' element={<Haks/>}/>


 </Routes>
    </div>
   
);



}



export default App;