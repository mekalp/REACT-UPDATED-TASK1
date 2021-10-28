import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck,faTimes} from '@fortawesome/free-solid-svg-icons'





function App(){

  return (
        
     <Fragment>
     <div class="p-3 mb-2 bg-primary text-black"> 
     
     <div class="row text-center mt-5 mb-5">

          <div class="col-lg-4">
                <div class="bg-white p-5 rounded-lg shadow">
                  <h1 class="h6 text-uppercase font-weight-bold mb-4">FREE</h1>
                  <h2 class="h1 font-weight-bold">$0<span class="text-small font-weight-normal ml-2">/month</span></h2>
                  <div class="custom-separator my-4 mx-auto bg-primary"></div>
                  <ul class="list-unstyled my-5 text-small text-left">
                    <li class="mb-3"><FontAwesomeIcon icon={faCheck}/> Single</li>
                    <li class="mb-3"><FontAwesomeIcon icon={faCheck}/> 5GB Storage </li>
                    <li class="mb-3"><FontAwesomeIcon icon={faCheck}/> Unlimited Public Projects </li>
                    <li class="mb-3"><FontAwesomeIcon icon={faCheck}/> Community Access </li>
                    <li class="mb-3"><FontAwesomeIcon icon={faTimes}/> Unlimited Private Projects </li>
                    <li class="mb-3"><FontAwesomeIcon icon={faTimes}/> Dedicated Phone Support </li>
                    <li class="mb-3"><FontAwesomeIcon icon={faTimes}/> Free Subdomain </li>
                    <li class="mb-3"><FontAwesomeIcon icon={faTimes}/> Monthly Status Reports </li>   
                  </ul>
                  <button type="button" class="btn btn-primary">BUTTON</button>
                  </div>
                 </div>


                 <div class="col-lg-4">
                <div class="bg-white p-5 rounded-lg shadow">
                  <h1 class="h6 text-uppercase font-weight-bold mb-4">PLUS</h1>
                  <h2 class="h1 font-weight-bold">$9<span class="text-small font-weight-normal ml-2">/month</span></h2>
                  <div class="custom-separator my-4 mx-auto bg-primary"></div>
                  <ul class="list-unstyled my-5 text-small text-left">
                    <li class="mb-3"><FontAwesomeIcon icon={faCheck}/> Single </li>
                    <li class="mb-3"><FontAwesomeIcon icon={faCheck}/> 5GB Storage </li>
                    <li class="mb-3"><FontAwesomeIcon icon={faCheck}/> Unlimited Public Projects </li>
                    <li class="mb-3"><FontAwesomeIcon icon={faCheck}/> Community Access </li>
                    <li class="mb-3"><FontAwesomeIcon icon={faCheck}/> Unlimited Private Projects </li>
                    <li class="mb-3"><FontAwesomeIcon icon={faCheck}/> Dedicated Phone Support </li>
                    <li class="mb-3"><FontAwesomeIcon icon={faCheck}/> Free Subdomain </li>
                    <li class="mb-3"><FontAwesomeIcon icon={faTimes}/> Monthly Status Reports </li>   
                  </ul>
                  <button type="button" class="btn btn-primary">BUTTON</button>
                  </div>
                 </div>


                 <div class="col-lg-4">
                <div class="bg-white p-5 rounded-lg shadow">
                  <h1 class="h6 text-uppercase font-weight-bold mb-4">PRO</h1>
                  <h2 class="h1 font-weight-bold">$49<span class="text-small font-weight-normal ml-2">/month</span></h2>
                  <div class="custom-separator my-4 mx-auto bg-primary"></div>
                  <ul class="list-unstyled my-5 text-small text-left">
                    <li class="mb-3"><FontAwesomeIcon icon={faCheck}/> Single </li>
                    <li class="mb-3"><FontAwesomeIcon icon={faCheck}/> 5GB Storage </li>
                    <li class="mb-3"><FontAwesomeIcon icon={faCheck}/> Unlimited Public Projects </li>
                    <li class="mb-3"><FontAwesomeIcon icon={faCheck}/> Community Access </li>
                    <li class="mb-3"><FontAwesomeIcon icon={faCheck}/> Unlimited Private Projects </li>
                    <li class="mb-3"><FontAwesomeIcon icon={faCheck}/> Dedicated Phone Support </li>
                    <li class="mb-3"><FontAwesomeIcon icon={faCheck}/> Free Subdomain </li>
                    <li class="mb-3"><FontAwesomeIcon icon={faCheck}/> Monthly Status Reports </li>   
                  </ul>
                  <button type="button" class="btn btn-primary">BUTTON</button>
                  </div>
                 </div>
                 </div>
   </div>
     </Fragment>

  )
}

ReactDOM.render(<App/>,document.getElementById("root"))


