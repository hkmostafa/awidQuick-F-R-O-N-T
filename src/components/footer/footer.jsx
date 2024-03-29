import React, { Suspense } from 'react';
import './footer.scss';
const AwidMap = React.lazy(()=>import('../map/map'));
import {BsFacebook,BsInstagram} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom/dist';


function Footer(){
  const navigate = useNavigate()

    return(
        <div className="footer">
        <div className='footer-left'>
        <img src="/images/greenlogo.png" alt="" onClick={()=>{navigate('/')}}/>
         <div className='download'>
           <img src="/images/googleplay.png" alt="" onClick={()=>{navigate('/')}}/>
           <img src="/images/appstore.png" alt=""  onClick={()=>{navigate('/')}}/>
         </div>
        </div>
         <div className='footer-center'> 
         <div>
            <h3>CONTACTER NOUS</h3>  
           <h4><a href="mailto: contact@awidquick.com"   target="_blank">contact@awidquick.com</a></h4>
           <h4><a href="https://api.whatsapp.com/send/?phone=212661461262&text&type=phone_number&app_absent=0" target={'_blank'}>+212 661 46 1262</a></h4>
           <h4>AGADIR, MAROC</h4></div>
          
           <div>
           <h3>SUIVEZ NOUS</h3>
           <a href='https://www.instagram.com/awidquick/' target={'_blank'} className='socials' ><BsInstagram size={20}/><h4>Instagram</h4></a>
           <a href='https://www.facebook.com/AwidQuick'  target={'_blank'} className='socials'><BsFacebook size={20}/><h4>Facebook</h4></a>
           </div>
           
         </div>
       
         <div className='footer-right'>
         <Suspense fallback={<div style={{position : 'relative',top : 0, left : 0, bottom : 0, right : 0, margin:'auto' , fontFamily : 'Josefin Light'}}>Map encore de telechargement...</div>}>

            <AwidMap/>
        
            </Suspense>
          </div>
         </div> 
         
    )
}

export default Footer