import { useState } from "react";


const Mbar=()=>{
  const [open,setOpen] = useState(true)
  const Menus = [
    {title:"Dashbord", src:"Chart_fill"},
    {title:"Inbox", src:"Chat"},
    {title:"Account", src:"User",gap: true},
    {title:"Schedule", src:"Calender"},
    {title:"Search", src:"Serach"},
    {title:"Analytics", src:"Chart"},
    {title:"Files", src:"Folder",gap:true},
    {title:"Setting", src:"Settings"},
  ]
  return(
    <div className="flex fixed">
      <div className={`${open ? "w-72" : "w-20" }  duration-300 h-screen p-5 pt-8 bg-dark-purple relative`}>
        <img src="./src/assets/control.png" className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-dark-purple ${!open && "rotate-180"}`}
        onClick={()=> setOpen(!open)}></img>
        <div className="flex gap-x-4 items-center">
          <img src="./src/assets/logo.png" width="90px" height="90px" 
           className={`cusor-pointer duration-500 rounded-full`}/>
          <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>E-License</h1>
        </div>
        <ul className="pt-6">
            
              {Menus.map((menu,index)=>(
                <li key={index} className={`text-gray-300 text-sm flex-sm flex items-center gap-x-4  cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.gap ? "mt-9" : "mt-2"} ${index === 0 && " bg-light-white"}`}>
              
                  <img src={`./src/assets/${menu.src}.png`} />
                  <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
                </li>
              ))}
            
          </ul>
      </div>
   
    </div>
  )
}

export default Mbar;