import { useState , useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import "./Header.css"
import { headerlist } from "../assets/data/data";
import { IoFastFoodOutline } from "react-icons/io5";

export const Header =()=>{
    const [isSticky, setSticky]=useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    useEffect(()=>{
        const handleScroll = ()=>{
            const offset = window.scrollY
            if (offset > 0){
                setSticky(true);
            }
            else{
                setSticky(false);
            }
        };
        window.addEventListener("scroll",handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            
        };
    },[]);

    const toggleMenu =() =>{
        setMenuOpen(!isMenuOpen)
    }

    return(
        <>
        <header className={`main_header ${isSticky ? "sticky" : ""}`}>
            <div className="main_header__div">
               <div className="main_header__btn">
                    دکمه ورود
                </div>

                <div className="main_header__links">
                    لینک1
                    لینک2
                    لینک3
                </div>

                
                 <div className="main_header__logo__div">
                    <div className="main_header__logo__text">فود نت</div>
                    <div className="main_header__logo__icon">
                        <IoFastFoodOutline size={60} />
                    </div>

                    
                </div>


            </div>
        
        </header>
        
        
        
        </>
    )








}

