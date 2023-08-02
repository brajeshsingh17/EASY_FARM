import React, { useRef } from 'react';
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagram,
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';
import logo from '../../asset/Icons/Logos/png/ColorLogo.png'
//import logo from '../../asset/Icons/Logos/png/White logo - no background.png';



const Footer = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_FOOTER_TEMPLATE_ID, form.current, process.env.REACT_APP_CONTACTUS_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (


    // <div style={divStyles} className=" mx-auto py-16 px-4 grid lg:grid-cols-1 gap-8 focus:outline-none text-white bg-gradient-to-r from-purple-400 to cyan-500">
    <div className=" mx-auto pt-16 px-4 grid lg:grid-cols-1 gap-8 focus:outline-none text-black bg-white">
      <div >
        <h1 style={{ color: "cyan" }} className="w-full text-3xl font-bold text-[#00df9a]"><img className="w-48" src={logo} alt="" /></h1>
        <p className="py-4">This is website for connecting buyers and sellers of agriculture related products.</p>
        <div className=' flex flex-col'>
          <h4 className='font-medium text-gray-400 max-w-[200px]'>Quick Links</h4><br />
          <div>

          </div>
          <div className='flex gap-[150px]'>
            <div className='flex'>
              <ul className='flex flex-col justify-start hover:cursor-pointer'>
                <li className='py-1 text-sm'><a style={{ textDecoration: 'none' }} href={'/aboutus'}>About Us</a></li>
                <li className='py-1 text-sm'><a style={{ textDecoration: 'none' }} href={'/contactus'}>Contact Us</a></li>
                <li className='py-1 text-sm'><a style={{ textDecoration: 'none' }} href={'/privacypolicy'}>Privacy Policy</a></li>

              </ul>

            </div>

            <div className='flex hover:cursor-pointer'>
              <ul>
                <li className='py-1 text-sm'><a style={{ textDecoration: 'none' }} href={'/ReturnPolicy'}>Return Policy</a></li>
                <li className='py-1 text-sm'><a style={{ textDecoration: 'none' }} href={'/TermsAndConditions'}>Terms& condition</a></li>
                <li className='py-1 text-sm'><a style={{ textDecoration: 'none' }} href={'/cookiespolicy'}>Cookies Policy</a></li>
              </ul>
            </div>
            <div className="flex flex-end justify-between md:w-[10%] my-4 ">
              <a href='https://www.facebook.com/login/'><FaFacebookSquare size={30} /></a>
              <a href='https://www.instagram.com/accounts/login/'><FaInstagram size={30} /></a>
              <a href='https://twitter.com/i/flow/signup'><FaTwitterSquare size={30} /></a>
            </div>
            <div>
              <div className='mb-6 '>
                <h4>Feel free to subscribe. We won't send spams!!</h4><br />
                <div className='flex items-center '>
                  <form ref={form} onSubmit={sendEmail}>
                    <input required placeholder="Your Email here..." name='userEmailFooter' className='px-1 py-1 focus:outline-0 drop-shadow-lg text-black outline-none border-2 border-yellow-500 rounded-xl mx-2 bg-white' type="email" id="footerEmail" />
                    <Button type='submit' variant="contained" endIcon={<SendIcon />} style={{ backgroundColor: "white", borderRadius: "12px", color: "black" }}>
                      Subscribe
                    </Button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>

  )
}
export default Footer