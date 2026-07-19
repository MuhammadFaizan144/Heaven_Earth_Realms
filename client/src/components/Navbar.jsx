import React from 'react'
const navbarlinks=[
  {name:"Home",link:"/"},
  {name:"News",link:"/"},
  {name:"Store",link:"/"},
  {name:"Community",link:"/"},
  {name:"Items",link:"/"},
  {name:"Classes",link:"/"},
]
const Navbar = () => {
  return (
    <nav>
      <div className="">
        <div className="">
            
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

        </div>
      </div>
      <div className=""></div>
    </nav>
  )
}

export default Navbar
