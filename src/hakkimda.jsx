import ben from './assets/image.jpg'
import js from './assets/logo1.png'
import reat from './assets/reat.webp'

function Haks(){




    return(
        <div className="bg-gray-400 min-h-screen min-w-screen flex  ">
            <div className="flex flex-col p-10 gap-2 h-[600px] w-[450px] border-[1px] ml-auto">
                
             <h1 className="font-extrabold text-start mt-[0px] border-[8px] border-gray-600">Ben kİMİM?</h1>
                <img className=" transition-opacity opacity-60 scale-50 duration-600 hover:opacity-100  scale-100    w-[120px] h-[200px] rounded-[7px] border-[5px] border-gray-700 self-end" src={ben}/>
            
                
                    <p className="mt-[50px] mt-0 text-gray-900 font-extrabold text-start">

  Merhaba! Ben Emirhan Çelik. Teknolojinin dünyayı değiştirme gücüne olan inancımla 
  yazılım dünyasına adım attım. Yaklaşık 6 aydır front-end teknolojileri üzerine 
  yoğunlaşıyor, modern ve kullanıcı dostu arayüzler geliştiriyorum. Öğrenmeyi ve 
  teknik sorunları çözmeyi bir yaşam biçimi haline getirdim  
                    </p>


            
             
            </div>
        </div>
       


        
    );

}
export default Haks