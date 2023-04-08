import {useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
    
    import Search from "./Search/Search";
    import Cart from "../Cart/Cart";
    import { Context } from "../../utils/context";

    import{ TbSearch } from "react-icons/tb";
    import { CgShoppingCart } from "react-icons/cg"; 
    import { AiOutlineHeart } from "react-icons/ai" ;
    

import "./Header.scss";
const Header = () => {
    const [scrolled, setScrolled]= useState(false);

    const handleScroll= () => { 
        const offset= window.scrollY //9. We want our header to get stickey after some point, so we want that as our scroll amount i.e. offset goes over 200px height then we want our header should be stickey. So for that we do "setScrolled" state to be true, else "setScrolled" state remains false.
        if(offset > 200){
            setScrolled(true);
        }else{
            setScrolled(false);
        }
    };

    useEffect(()=> { 
        window.addEventListener("scroll",handleScroll)  //8.It means our even would be scroll and on scrolling we want handleScroll method to run
    }, [])
    return (
     <header className={`main-header ${scrolled ? 'sticky-header': ''}`}> {/*10. so by using our state, whenever our "scrolled" state is true we add our 'stickey-header' class, else false then do nothing */}
        <div className="header-content">
            <ul className="left">
                <li>Home</li>
                <li>About</li>
                <li>Categories</li>
            </ul>
            <div className="center">SOUNDSTORE</div>
            <div className="right">
                <TbSearch />
                <AiOutlineHeart />
                <span className="cart-icon">
                    <CgShoppingCart />
                    <span>5</span>
                </span>
            </div>
        </div>
    </header>
    );
};

export default Header;
