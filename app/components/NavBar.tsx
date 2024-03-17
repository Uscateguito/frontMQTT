'use client'
import React from 'react'
// import {useEffect, useState} from 'react'

const navBar = () => {
    // const [theme, setTheme] = useState(
    //     localStorage.getItem("theme") ? localStorage.getItem("theme") : "business"
    // );
    //
    //
    // const handleToggle = (e) => {
    //     if(e.target.checked){
    //         setTheme("business");
    //     }
    //     else{
    //         setTheme("retro");
    //     }
    // }
    //
    // useEffect(() => {
    //     localStorage.setItem("theme", theme);
    //     const localTheme = localStorage.getItem("theme");
    //     document.querySelector("html").setAttribute("data-theme", localTheme);
    // }, [theme]);

    return (
        <div className="navbar-center">
                <a className="btn btn-ghost text-xl">Publisher Subscriber</a>
        </div>
    )
}

export default navBar