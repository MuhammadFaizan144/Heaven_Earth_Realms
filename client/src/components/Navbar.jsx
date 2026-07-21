import React from 'react'
import { FaDiscord,FaYoutube,FaTiktok } from 'react-icons/fa';

const navbarlinks=[
  {name:"Home",link:"/"},
  {name:"News",link:"/"},
  {name:"Store",link:"/"},
  {name:"Community",link:"/"},
  {name:"Items",link:"/"},
  {name:"Classes",link:"/"},
]
const navIcons=[
  {link:"/",icons:FaDiscord},
  {link:"/",icons:FaYoutube},
  {link:"/",icons:FaTiktok},
]
const Navbar = () => {
  return (
    <nav>
      <div className="flex">
        <div>
            <ul className="flex">
              {navIcons.map((items,index)=>{
                const Icon=items.icons
              return(
                <li key={index}>
                  <div className="flex">
                    <Icon/>
                  </div>
                </li>
              )})}
              
            </ul>
        </div>
        <div className="">
            <ul className='flex'>
              {navbarlinks.map((items,index)=>(
                <li key={index}>
                  <div className="">{items.name}</div>
                </li>
              ))}
              <ul></ul>
            </ul>
        </div>
        <div className="">
              <img src="/images/model01.png" alt="logo" className='w-48 h-14'/>
        </div>
      </div>
      <div className=""></div>
    </nav>
  )
}

export default Navbar
