import React from 'react'
import"./SideNav.css"

const SideNav = () => {
 
    // let btn = document.querySelector('#btn')
    // let sidebar = document.querySelector('.sidebar')

    // btn.onclick = function () {
    //     sidebar.classList.toggle('active');
    // }

  return (
    <div>  
<link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet"/>

       <div className="sidebar">
        <div className="top">
            <div className="logo">
                <i className="bx bxl-codepen"></i>
                <span>Tunisair</span>
            </div>
            <i className="bx bx-menu" id="btn"></i>
        </div>
        <div className='user'>
            <img src='' alt="me" className='user-img'/>
                <div>
                    <p className='bold'>UserName</p>
                    <p>role</p>
                </div>
        </div>
        <ul>
        <li>
                <a href="#" >
                    <i className='bx bx-cog'></i>
                    <span className='nav-item'>Profile</span>
                </a>
                <span className='tooltip'>Profile</span>
            </li>

            <li>
                <a href="#" >
                    <i className='bx bxs-grid-alt'></i>
                    <span className='nav-item'>Reunion</span>
                </a>
                <span className='tooltip'>Reunion</span>
            </li>
            <li>
                <a href="#" >
                    <i className='bx bxs-grid-alt'></i>
                    <span className='nav-item'>Filiales</span>
                </a>
                <span className='tooltip'>Filiales</span>
            </li>
            <li>
                <a href="#" >
                    <i className='bx bxs-food-menu'></i>
                    <span className='nav-item'>Pv</span>
                </a>
                <span className='tooltip'>PV</span>
            </li>
            <li>
                <a href="#" >
                    <i className='bx bx-body'></i>
                    <span className='nav-item'>users</span>
                </a>
                <span className='tooltip'>users</span>
            </li>
            <li>
                <a href="#" >
                    <i className='bx bx-log-out'></i>
                    <span className='nav-item'>Logout</span>
                </a>
                <span className='tooltip'>Logout</span>
            </li>
        </ul>
       </div>

       <div className='main-content'>
        <div className='container'>
            <h1> formulair 1</h1>
            <h1> formulair 2</h1>
        </div>
       </div>




        
    </div>
    
     
    
  )
}

export default SideNav