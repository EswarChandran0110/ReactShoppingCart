import React from "react";


function Nav ({count}){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                {/* Logo */}
                <span className="navbar-brand">Start Bootstrap</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* Collapse-Button */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        {/* Home */}
                        <li className="nav-item">
                            
                            <span className="nav-link active" aria-current="page">Home</span>
                        </li>
                         {/* About */}
                        <li className="nav-item">
                           
                            <span className="nav-link active" >About</span>
                        </li>
                        {/* Shop-DropDown Option */}
                        <li className="nav-item dropdown">
                            
                            <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Shop
                            </span>
                            {/* Shop-Dropdowns */}
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><span className="dropdown-item">All Products</span></li>
                                <li><span className="dropdown-item">Popular Items</span></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><span className="dropdown-item">New Arrivals</span></li>
                            </ul>
                        </li>
                    </ul>
                    {/* Cart */}
                    <div className="d-flex">
                      <button className="cart btn btn-outline-dark" type="button">
                       
                        <i className="bi-cart-fill me-1"></i> 
                        Cart
                        <span class="badge bg-dark text-white ms-1 rounded-pill">{count}</span>
                        
                      </button>
                   </div>
                </div>
                
            </div>
            
        </nav> 
        </>
    );
}

export default Nav;