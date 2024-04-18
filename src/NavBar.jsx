import React from 'react'

const NavBar= () => {
  return (
      <div className=" flex justify-between bg-slate-200 pt-2 pb-2 ">
            <div className="logo">
                <img src="https://static.vecteezy.com/system/resources/previews/000/963/090/original/cartoon-man-with-to-do-list-on-clipboard-vector.jpg" height="300" width="200"alt="Error" />
            </div>
            < div className="font-bold  pt-14 mx-44 text-2xl gap-6 flex ">
                  <div className="items hover:font-extrabold ">
                      <a href="#">Home</a>
                  </div>
                  <div className="items hover:font-extrabold">
                      <a href="#">Details</a>
                  </div>
                  <div className="items hover:font-extrabold">
                     <a href="#">Your Status</a>
                  </div>
                  <div className="items hover:font-extrabold">
                      <a href="#">Reviews</a>
                  </div>
                
            </div>
      </div>
  )
}

export default NavBar
