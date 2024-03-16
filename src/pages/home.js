import React from 'react';
import '../style/frontPages.css'

class HomePage extends React.Component{
    
    // constructor(){

    // }

   render(){
        return(
              
                    <div id="main-section">
                        <div id="background">
                            <div style= {{width:"1469px; margin-left: 18px; height: 500px;"}}>
                            <div class="row">
                                <div class="col-8"></div>
                                <div class="col-3">
                                    <nav id="navigation_bar">
                                        {/* <!--login and create account button--> */}
                                        <div>
                                        <button type="button" class="me-4" id="login">Login</button>
                                        </div>
                                        <div>
                                        <button type="button" id="create_account" class="btn btn-outline-light">Create an account</button>
                                    </div>
                                    {/* <!--done--> */}
                                </nav>
                                {/* <!--navigation done--> */}
                                </div>
                                {/* <!--coloumn-1--> */}
                                <div class="col-1"></div>
                        </div>
                            {/* <!--navigation row-1 done--> */}
                            {/* <!--logo start--> */}
                            <div class="row">
                                <div class="col-5"></div>
                                <div class="col-2">
                                <div class="logo">
                                    <div class="logo-text">e!</div>     
                                </div>
                                </div>
                                <div class="col-5"></div>
                        </div>  
                        {/* <!--logo row-2 done--> */}
                        {/* <!--heading start--> */}
                        <div class="row">
                            <div class="col-3"></div>
                                <div class="col-6" style= {{blocksize: "109px;"}}>
                                <h2 class="main-text">Find the best restaurants, cafés, and bars</h2>
                            </div>
                        </div>
                        {/* <!--main text row-3 done--> */}
                        {/* <!--row-4 start--> */}
                        <div class="row">
                            <div class="col-2"></div>
                            <div class="col-8">
                                <div>
                                    {/* <!-----------------location dropdown-------------------> */}
                                    {/* <div class = "ui-widget">
                                        <input type="text" placeholder="Search for locations" id = "autocmplete-1"  class="location" oninput="openDropdown()"/>
                                    </div> */}


                                    <div>
                                    <select class="form-select form-select-sm selected-location location" style= {{display: "inline-block;"}} aria-label="Small select example">
                                            <option selected disabled>Please type a location</option>
                                            <option>Sarjapur Road</option>
                                            <option>Bengaluru HSR Layout</option>
                                            <option>Bengaluru Kormangala</option>
                                            <option>Bengaluru Jay Nagar</option>
                                            <option>Bengaluru</option>
                               
                                    </select>

                                    </div>

                                

                                    
                                        
                                    {/* <!--------------------------------------------------------> */}
                                        
                            <div class="dropdown restraunt" style={{display: "inline-block;"}}>
                                <a class="btn btn-secondary dropdown-toggle restraunt-dropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{background: "#FFFFFF !important; color: #636F88;"}}>
                                    <h3 id="dropdown-text">Search for restaurants</h3>
                                </a>
                            
                                <ul class="dropdown-menu selected-restraunt">
                                <li><a class="dropdown-item" href="#"><img src="./images/image2.png" alt="food image" id="image"/><h4 id="restaurant-name">The Big Chill Cakery</h4></a></li>
                                <li><a class="dropdown-item" href="#"><h4 class="location-name">Sarjapur Road, Bengaluru</h4></a></li>
                                <hr/>
                                <li><a class="dropdown-item restaurant-name" href="#"><img src="./images/image2.png" alt="food image" id="image"/><h4 id="restaurant-name">Punjabi Rasoi</h4></a></li>
                                <li><a class="dropdown-item" href="#"><h4 class="location-name">Sarjapur Road, Bengaluru</h4></a></li>
                                <hr/>
                                <li><a class="dropdown-item restaurant-name" href="#"><img src="./images/image2.png" alt="food image" id="image"/><h4 id="restaurant-name">Punjabi Rasoi</h4></a></li>
                                <li><a class="dropdown-item" href="#"><h4 class="location-name">Sarjapur Road, Bengaluru</h4></a></li>
                                </ul>
                            </div>
                            <i class="bi bi-search"></i> 
                        
                                </div>
                            </div>
                        </div>
                        {/* <!--main text row-3 done-->  */}
                </div>      
                </div>
                
                    {/* <!--background done--> */}

                    {/* <!--quick search--> */}
                <div style={{width: "1485px;"}}>        
                        <div class="row">
                                <div class="col-1"></div>
                                                <div class="col-10 ms-5">
                                                        <h2 class="heading-1">Quick Searches</h2>
                                                        <h4 class="heading-2">Discover restaurants by type of meal</h4>
                                                </div>
                               </div>
                        </div>   
                
                    {/* <!-- quick search done--> */}
                    {/* <!--food block row-1 start--> */}
                    <div class="row">
                        <div class="col-1"></div>
                        <div class="col-10">
                            <div class="d-flex" style={{height: "188px;"}}>
                                <a href="../FilterPage/FilterPage.html">
                                    <div class="d-inline-block m-3 ms-5 food-card">
                                        <div class="d-inline-block w-1">
                                            <img src="./images/image2.png" alt="food image" width="160px" height="160px"/>
                                        </div>
                                        <div class="d-inline-block text-block">
                                            <h2 class="block_text">Breakfast</h2>
                                            <p class="block_text-2">Start your day with exclusive breakfast options</p>
                                        </div>
                                    </div>

                                </a>

                                <a href="../FilterPage/FilterPage.html">

                                    <div class="d-inline-block m-3 ms-4 food-card">
                                        <div class="d-inline-block w-1">
                                            <img src="./images/image-3.png" alt="food image" width="160px" height="160px"/>
                                        </div>
                                        <div class="d-inline-block text-block">
                                            <h2 class="block_text">Lunch</h2>
                                            <p class="block_text-2">Start your day with exclusive breakfast options</p>
                                        </div>
                                    </div>
                                </a>

                                <a href="../FilterPage/FilterPage.html">

                                    <div class="d-inline-block m-3 ms-4 food-card">
                                        <div class="d-inline-block w-1">
                                            <img src="./images/image-4.png" alt="food image" width="160px" height="160px"/>
                                        </div>
                                        <div class="d-inline-block text-block">
                                            <h2 class="block_text">Snacks</h2>
                                            <p class="block_text-2">Start your day with exclusive breakfast options</p>
                                        </div>
                                    </div>
                                </a>
                                </div>
                            </div>  
                        </div>    

                        {/* <!--food block done--> */}

                        {/* <!--food block row-2 start--> */}
                    
                        <div class="row">
                            <div class="col-1"></div>
                                <div class="col-10">
                                    <div class="d-flex" style={{position:"absolute", top:"51rem"}}>
                                    <a href="../FilterPage/FilterPage.html">
                                        <div class="d-inline-block m-3 ms-5 food-card">
                                            <div class="d-inline-block w-1">
                                                <img src="./images/image-6.png" alt="food image" width="160px" height="160px"/>
                                            </div>
                                            <div class="d-inline-block text-block">
                                                <h2 class="block_text">Dinner</h2>
                                                <p class="block_text-2">Start your day with exclusive breakfast options</p>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="../FilterPage/FilterPage.html">
                                        <div class="d-inline-block m-3 ms-4 food-card">
                                            <div class="d-inline-block w-1">
                                                <img src="./images/image-5.png" alt="food image" width="160px" height="160px"/>
                                            </div>
                                            <div class="d-inline-block text-block">
                                                <h2 class="block_text">Drinks</h2>
                                                <p class="block_text-2">Start your day with exclusive breakfast options</p>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="../FilterPage/FilterPage.html">

                                        <div class="d-inline-block m-3 ms-4 food-card">
                                            <div class="d-inline-block w-1">
                                                <img src="./images/image-7.png" alt="food image" width="160px" height="160px"/>
                                            </div>
                                            <div class="d-inline-block text-block">
                                                <h2 class="block_text">Nightlife</h2>
                                                <p class="block_text-2">Start your day with exclusive breakfast options</p>
                                            </div>
                                        </div>
                                    </a>
                                    </div>
                                </div>  
                        </div>    

                            {/* <!--food block done--> */}
                    </div>
               
        )}}

export default HomePage;