import {Link} from 'react-router-dom'
function Nav(){


    return(
        <header className="heat">


    <nav >
             
       
                   
                        <div>
     <ul className="flex justify-center gap-[30px] font-bold text-[22px]" >

   <li><Link to='/anasayfa'>Anasayfa</Link></li>
                    <li><Link to='/filmler'>Filmler</Link></li>
                    <li><Link to='hakkimda'>Hakkimda</Link></li>
                    </ul>

                        </div>
                 
                    </nav>
    

        </header>

                
    
    );
}
export default Nav;