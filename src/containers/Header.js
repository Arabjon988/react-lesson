import React from 'react'
import './Header.css'
import { AiOutlineRight, AiOutlineDown, AiOutlineMenu } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { GiUsaFlag } from "react-icons/gi";
// import { FiChevronUp } from "react-icons/fi";
import { CgClose } from "react-icons/cg";


function Header() {
    // const Section = document.querySelector('.section')
    // const all = document.querySelector('.all')
    // all.addEventListener('click', ({
    //     all.style.display= 'none'
    // }))

    return (
        <div>
            <div className="navbar">
                <h2 className='all'> <AiOutlineMenu /> All</h2>
                <h2>Today's Deals</h2>
                <h2>Customer Services</h2>
                <h2>Gift Cards</h2>
                <h2>Registry</h2>
                <h2>Sell</h2>
                <h2>Amazon's response to COVID-19</h2>
            </div>
            <div className="section">
                <div className="sidebar">
                    <div className="signIn">
                        <i><MdAccountCircle /></i> <h2> Hello, Sign in</h2>
                    </div>
                    <div className="menubar">
                        <h3>Digital Content & Devices</h3>
                        <span><p>Amazon Music</p><i><AiOutlineRight /></i></span>
                        <span><p>Kindle E-readers & Books</p><i><AiOutlineRight /></i></span>
                        <span><p>Appstore for Android</p><i><AiOutlineRight /></i></span><hr />
                        <h3>Shop By Department</h3>
                        <span><p>Electronics</p><i><AiOutlineRight /></i></span>
                        <span><p>Compyuters</p><i><AiOutlineRight /></i></span>
                        <span><p>Smart Home</p><i><AiOutlineRight /></i></span>
                        <span><p>Arts & Crafts</p><i><AiOutlineRight /></i></span>
                        <span className='down'><p>See All</p><i><AiOutlineDown /></i></span><hr />
                        <h3>Programs & Features</h3>
                        <span><p>Gift cards</p><i><AiOutlineRight /></i></span>
                        <span><p>#FoundItOnAmazon</p><i><AiOutlineRight /></i></span>
                        <span><p>Amazon Live</p><i><AiOutlineRight /></i></span>
                        <span><p>International Shopping</p><i><AiOutlineRight /></i></span>
                        <span className='down'><p>See All</p><i><AiOutlineDown /></i></span><hr />
                        <h3>Help & Settings</h3>
                        <span><p>Your Account</p></span>
                        <span><i className='language'><BiWorld /></i><p>English</p></span>
                        <span className='flag'><i><GiUsaFlag /></i><p>United States</p></span>
                        <span><p>Customer Service</p></span>
                        <span><p>Sign In</p></span>


                    </div>
                </div>
                <div className="section__right">
             <button><CgClose /></button>

                </div>
            </div>
        </div>
    )
}

export default Header

// FiChevronUp

//             <button><CgClose /></button>

 //     pod.map(ism=> (
        //         <p>{ism}</p>
        //     ))

        // }
        // {
        //     icon.map(ikon=>(
        //         <p>{ikon}</p>
        //     ))