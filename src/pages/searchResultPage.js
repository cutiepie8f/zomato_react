import React from 'react';
import '../style/searchResult.css'

class SeachResultPage extends React.Component{
    
    // constructor(){

    // }

   render(){
        return(
              
                   <div>
                        <div id="root">
                                <div id="header">
                                    {/* <!--header part--> */}
                                    <div id="headerPart">
                                        <div id="logo">
                                            <label id="logo_name">e!</label>
                                        </div>
                                        <a href="">
                                            <div id="login">
                                                <h2 id="login_text">Login</h2>
                                            </div>
                                        </a>
                                        </div>
                                        <div id="create_account">
                                            <button id="create_account-text">Create an account</button>
                                        </div>
                                    </div>
                                </div>
                {/* <!--header part complete--> */}
                                <div id="subpart">     
                                    {/* <!--background image--> */}
                                    <div id="background_image">
                                        <a href="../imageGalleryPage/imageGalleryPage.html">
                                            <div id="image_gallery_button">
                                                <button id="image_gallery_text">Click to see Image Gallery</button>
                                            </div>
                                        </a>
                                    </div>
                                    {/* <!--background image done--> */}
                                    
                                    {/* <!--restraunt name heading--> */}
                                    <div id="restaurant-name">
                                        <h2>The Big Chill Cakery</h2>
                                    </div>
                                    {/* <!--done-->
                        */}
                                    {/* <!--Place order button--> */}
                                    <div id="place_order">
                                    <button id="place_order_button">Place Online Order</button>
                                    </div>
                                    {/* <!--end--> */}
                        
                                    {/* <!--button header--> */}
                                    <div id="overviewPart">
                                        <div id="overview">
                                            <button id="button" class="overviewButton" onclick="overview()">Overview</button>
                                        </div>
                                        <div id="contact">
                                            <button id="button" class="contactButton" onclick="contact()">Contact</button>
                                        </div>
                                    </div>
                                    {/* <!--done--> */}
                                    <hr id="line"/>
                        
                                    {/* <!--text header--> */}
                                    <div id="text_header">
                                        <h2>About this place</h2>
                                    </div>
                                    {/* <!--done--> */}
                        
                                    {/* <!--inside text-1--> */}
                                    <div id="main_text">
                                        <h2 id="text-1">Cuisine</h2>
                                        <h3 id="text-2">Bakery, Fast-food</h3>
                                    </div>

                                    {/* <!--done--> */}
                                    <br/><br/>
                                    {/* <!--inside text-2--> */}
                                    <div id="main_text">
                                        <h2 id="text-3">Average Cost</h2>
                                        <h3 id="text-4">₹700 for two people (approx.)</h3>
                                    </div>
                                    {/* <!--done--> */}
                                </div>
                                {/* <!--done-->    */}
                                </div>  
                               
              
        )}
    }

export default SeachResultPage;