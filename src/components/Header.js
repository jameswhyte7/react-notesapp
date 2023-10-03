import React from 'react';
import { FaSearch, FaFeatherAlt } from "react-icons/fa";
import '../App.css'

const Header = () => {
    return (
        <>

            <header>
                <div className='Search-Container'>
                    <div className='Ball'>
                        <h3 className='Codetrain'>Ball<span style={{ color: 'rgba(255, 0, 0, 0.789)'}}>Point</span></h3> <br></br>
                        <FaFeatherAlt color="indigo" size="20px"/>
                    </div>

                    <div className='Search'>
                        <FaSearch color="black"/>
                        <input type='text' placeholder='type to search...'/>
                     </div>
                </div>
            </header>

        </>
    );
}

export default Header;




















// const openMenu = () => {
//     document.querySelector('.backdrop').className = 'backdrop active';
//     document.querySelector('aside').className = 'active'
// }

// const closeMenu = () => {
//     document.querySelector('.backdrop').className = 'backdrop';
//     document.querySelector('aside').className = '';
// }

// document.getElementById('menuBtn').onclick = e => {
//     e.preventDefault();
//     openMenu();
// }

// document.querySelector('aside button.close').onclick = e => {
//     e.preventDefault();
//     closeMenu();
// }

// document.querySelector('backdrop').onclick = e => {
//     e.preventDefault();
//     closeMenu();
// }
