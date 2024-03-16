import React from 'react';
import '../style/filterpage.css'

class FilterPage extends React.Component{
    
    // constructor(){

    // }

   render(){
        return(
              
            <div>
                <div id="filter-section">
                    
                    {/* <!--header--> */}
                    <div id="header">
                            <div style={{width: "1200px;" ,margin: "auto;"}}>
                                {/* <!--logo--> */}
                                <div id="logo">e!</div>
                                {/* <!--done--> */}
                                
                                {/* <!--login and create account button--> */}
                                <a href="">
                                    <div id="login">
                                    <h3>Login</h3>
                                    </div>
                                </a>
                                <div id="create_account">
                                    <button id="create_account_button">Create an account</button>
                                    
                                </div>
                                {/* <!--done--> */}
                            </div>
                    </div>
                    {/* <!--done--> */}
                    
                    <div style={{margin: "auto;", width: "1100px;"}}>
                                {/* <!--Breakfast heading--> */}
                                <div id="main_heading">
                                <h2>Breakfast Places in Mumbai</h2>
                                </div>
                                {/* <!--done--> */}
        
                                {/* <!--block-1--> */}
                                    <div id="filter_block">
                                        {/* <!--filter--> */}
                                        <div id="filter"><h3>Filters</h3></div>
                                        {/* <!--done-->
                                        <!--select location--> */}
                                        <div id="select_location_text"><label for="location">Select Location</label></div>
                                        <div>
                                            <select id="location">
                                            <option selected disabled>Select Location</option>
                                            <option>Bangalore</option>
                                            <option>Gujarat</option>
                                            <option>Bhopal</option>
                                            <option>Delhi</option>
                                            </select>
                                            </div>
                                    {/* <!--select location done--> */}
                                    
                                    {/* <!--cuisine--> */}
                                    <div id="cuisine-text">
                                        <label>Cuisine</label>
                                        <div id="cuisine-subtext">
                                            <input class="checkbox" type="checkbox" id="north indian" name="cuisine"/>
                                            <label class="checkbox-text" for="north indian">North Indian</label> 
                                        </div>
                                        <div>
                                            <input class="checkbox" type="checkbox" id="south indian" name="cuisine"/>
                                            <label class="checkbox-text" for="south indian">South Indian</label>
                                        </div>
                                        <div>
                                            <input class="checkbox" type="checkbox" id="chineese" name="cuisine"/>
                                            <label class="checkbox-text" for="chineese">Chinese</label>
                                        </div>
                                        <div>
                                            <input class="checkbox" type="checkbox" id="fast food" name="cuisine"/>
                                            <label class="checkbox-text" for="fast food">Fast Food</label> 
                                        </div>
                                        <div>
                                            <input class="checkbox" type="checkbox" id="street food" name="cuisine"/>
                                            <label class="checkbox-text" for="street food">Street Food</label>
                                        </div>
                                </div>
                            
                            {/* <!--cuisine done--> */}
                            
                            {/* <!--cost--> */}
                            <div class="cost">
                                <label>Cost For Two</label>
                                <div id="costText">
                                    <input class="cost-radiobutton" type="radio" id="price-margin-1" name="cost"/>
                                    <label class="radiobutton-text" for="price-margin-1">Less than ` 500</label> 
                                </div>
                                <div>
                                    <input class="cost-radiobutton" type="radio" id="price-margin-2" name="cost"/>
                                    <label class="radiobutton-text" for="price-margin-2">` 500 to ` 1000</label>
                                </div>
                                <div>
                                    <input class="cost-radiobutton" type="radio" id="price-margin-3" name="cost"/>
                                    <label class="radiobutton-text" for="price-margin-3">` 1000 to ` 1500</label>
                                </div>
                                <div>
                                    <input class="cost-radiobutton" type="radio" id="price-margin-4" name="cost"/>
                                    <label class="radiobutton-text" for="price-margin-4">` 1500 to ` 2000</label> 
                                </div>
                                <div>
                                    <input class="cost-radiobutton" type="radio" id="price-margin-5" name="cost"/>
                                    <label class="radiobutton-text" for="price-margin-5">` 2000+</label>
                                </div>
                                {/* <!--cost done--> */}
                                
                                {/* <!--sort--> */}
                                <div class="sort">
                                    <label style={{font: "normal normal 600 16px/27px Poppins;"}}>Sort</label>
                                    <div id="radioSort-one">
                                    <input class="sort-radiobutton" type="radio" id="price-low-to-high" name="sort"/>
                                    <label class="sort-radiobutton-text" for="price-low-to-high">Price low to high</label> 
                                </div>
                                <div id="radioSort-two">
                                    <input class="sort-radiobutton" type="radio" id="price-high-to-low" name="sort"/>
                                    <label class="sort-radiobutton-text" for="price-high-to-low">Price high to low</label>
                                </div>
                                </div>
                            </div>
                        {/* <!--block-1 end--> */}
                    <div>
                        {/* <!--block-2--> */}
                        <div id="block-2">
                            <a href="../searchResultPage/searchResult.html" class="link-block">
                            <div class="shop-details-1">
                                <img class="image1" src="./images/image2.png" alt="food image"/>
                                <h3 class="shop-1-heading-1">The Big Chill Cakery</h3>
                                <h4 class="shop-1-heading-2">FORT</h4>
                                <h1 class="shop-1-heading-3">Shop 1, Plot D, Samruddhi Complex, Chincholi…</h1>
                            </div>
                            </a>
                            <hr/>
                            <a href="../searchResultPage/searchResult.html" class="link-block">
                            <div class="price-1">
                                
                                <h5 class="cost-1-details-1">CUISINES: </h5>
                                <h5 class="cost-1-details-1">COST FOR TWO:</h5>
                                <h5 class="cost-1-price-detail">Bakery ₹700</h5>
                            </div>
                            </a>
                                        
                        </div>
                        {/* <!--block-2 end--> */}
                        <div class="block-3">
                            <a href="../searchResultPage/searchResult.html" class="link-block">
                            <div class="shop-details-1">
                                <img class="image1" src="./images/image2.png" alt="food image"/>
                                <h3 class="shop-1-heading-1">The Bake Shop</h3>
                                <h4 class="shop-1-heading-2">FORT</h4>
                                <h1 class="shop-1-heading-3">Shop 1, Plot D, Samruddhi Complex, Chincholi…</h1>
                                </div>
                            </a>
                            <hr/>
                            <a href="../searchResultPage/searchResult.html" class="link-block">
                            <div class="price-1">
                                <h5 class="cost-1-details-1" style={{color: "#636F88;"}}>CUISINES: </h5>
                                <h5 class="cost-1-details-1" style={{color: "#636F88;"}}>COST FOR TWO:</h5>
                                <h5 class="cost-1-price-detail">Bakery ₹700</h5>
                                </div>
                            </a>
                        </div>
                            
                {/* <!--done--> */}
                        
                        {/* <!--pagination--> */}
                        <div class="pagination">
                            <button class="pagination_box" style={{opacity: "40%;"}}>&lt;</button>
                            &ensp;
                            <button class="pagination_box" style={{backgroundcolor: "#8C96AB;", color: "#FFFFFF;"}}>1</button>
                            &ensp;
                            <button class="pagination_box">2</button>
                            &ensp;
                            <button class="pagination_box">3</button>
                            &ensp;
                            <button class="pagination_box">4</button>
                            &ensp;
                            <button class="pagination_box">5</button>
                            &ensp;
                            <button class="pagination_box">&gt;</button>     
                </div>
                {/* <!--pagination done--> */}
            </div>
            {/* <!-- done--> */}
        </div>
            </div>
                </div>
            </div>
               
        )}}

export default FilterPage;