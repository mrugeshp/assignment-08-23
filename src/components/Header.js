import React, { useState, useContext } from 'react'
import CartContext from './context/CartContext'

const Header = () => {
   const [hamBtn, setHamBtn] = useState(false)
   const { items, addToHeader } = useContext(CartContext)

   const handleHamBtn = () => {
    setHamBtn(!hamBtn)
    addToHeader(hamBtn)
   }

const navList = [
    {name: 'THE EDIT'},
    {name: 'NEW ARRIVALS'},
    {name: 'DISIGNERS'},
    {name: 'CLOTHING'},
    {name: 'SHOES'},
    {name: 'BAGS'},
    {name: 'ACCESSORIES'},
    {name: 'JAWELRY'},
    {name: 'BEAUTY'},
    {name: 'HOME'},

]
  return (
    <>
    <div className='nav'>
        <div className='nav-logo'>
            <h4>MY COMPANY.COM</h4>
        </div>
        <div className='navlist'>
            <ul>
               {
                    navList.map((nav, i) => {
                        return(
                            <li key={i}>{nav.name}</li>
                        )
                    })
                }
            </ul>
        </div>
        <div className='navlist-icon'>
            <ul>
                <li><i class="bi bi-search"></i></li>
                <li><i class="bi bi-cart"></i>{items.length}</li>
                <li><i class="person bi bi-person"></i></li>
                {
                    hamBtn === false ? <li onClick={handleHamBtn}><i class="hamber bi bi-list"></i></li> : <li onClick={handleHamBtn}><i class="bi bi-x-lg"></i></li>
                }
                
            </ul>
        </div>
        
    </div>
    {
        hamBtn === true ? (<div className='navlist-mbl'>
            <ul>
               {
                    navList.map((nav, i) => {
                        return(
                            <li key={i}>{nav.name}</li>
                        )
                    })
                }
            </ul>
        </div>):(<></>)
    }
        </>
  )
}

export default Header