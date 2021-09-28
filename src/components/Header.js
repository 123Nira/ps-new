import React,{useState} from 'react'
import { Link,useHistory } from 'react-router-dom'
import "./Header.css"
// import {GiHamburgerMenu} from "react-icons/gi"

function Header() {
  // const [showIcon, setShowIcon] = useState(true)
  const [order, setOrder] = useState();
  const [size, setSize] = useState(true)
  const history= useHistory()
  // console.log(history)
  history.push(order)
    return (
        <div className="listContainer">
          <div className="logo"><Link to='/' className="navLink"><h2>Home</h2></Link></div>
          {
          window.addEventListener("resize", (e) => {
            setSize(e.target.innerWidth)
                // console.log(e.target.innerWidth)
             })
           }
          {/* <div className={showIcon ? "menu-link mobile-menu-link" : "menu-link" }> */}
          {size>768 ?
          <ul className="listItem" >
          <li><Link to='/createorder' className="navLink">CreateOrder</Link></li>
          <li><Link to='/orderlist' className="navLink">OrerList</Link></li>
          <li><Link to='/updateorde' className="navLink">UpdateOrder</Link></li>
          <li><Link to='/deleteorder' className="navLink">DelteOrder</Link></li>
        </ul> : 
        <select onChange={(e)=>{setOrder(e.target.value)}}>
          <option value="createorder">CreateOrder</option>
          <option value="orderlist">OrerList</option>
          <option value="updateorder">UpdateOrder</option>
          <option value="delteorder">DelteOrder</option>
        </select>
        }
          
          {/* </div> */}
          {/* <div className="humbarger-menu" onClick={() => setShowIcon(!showIcon)} >
            <GiHamburgerMenu />
          </div> */}
      </div>
    )
}

export default Header
