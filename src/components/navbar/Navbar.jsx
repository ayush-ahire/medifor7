import React, { useState, useRef } from 'react';
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import './navbar.css';
import logo from '../../assets/logo-white.png';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', age: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formRef.current,
      'YOUR_PUBLIC_KEY'
    ).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success('Message sent successfully!'); // Success toast
        setIsModalOpen(false);
        setFormData({ name: '', email: '', phone: '', age: '', message: '' });
      },
      (error) => {
        console.log('FAILED...', error);
        toast.error('Message sending failed. Please try again.'); // Error toast
      }
    );
  };

  return (
    <>
      <ToastContainer />
      <div className="gpt3__navbar">
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="gpt3__navbar-links_container">
            <p><a href="#home">Home</a></p>
            <p><a href="#gpt3">About</a></p>
            <p><a href="#casestudies">Features</a></p>
            <p><a href="#blog">Achievements</a></p>
          </div>
        </div>
        <div className="gpt3__navbar-sign">
          <button onClick={() => setIsModalOpen(true)}>Free Trial</button>
        </div>
        <div className="gpt3__navbar-menu">
          {toggleMenu ? <RiCloseLine color='#000' size={25} onClick={() => setToggleMenu(false)} />
            : <RiMenuLine color='#000' size={25} onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
            <div className="gpt3__navbar-menu_container scale-up-center">
              <div className="gpt3__navbar-menu_container-links">
                <p><a href="#home">Home</a></p>
                <p><a href="#gpt3">About</a></p>
                <p><a href="#casestudies">Features</a></p>
                <p><a href="#blog">Achievements</a></p>
                <div className="gpt3__navbar-menu_container-links-sign">
                  <button onClick={() => setIsModalOpen(true)}>Get One</button>
                </div>
              </div>
            </div>
          )}
        </div>
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <h2>Apply For 7 days Free Trial</h2>
              <form ref={formRef} onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <input type="tel" name="phone" placeholder="Phone No" value={formData.phone} onChange={handleChange} required />
                <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
                <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required />
                <div className="modal-buttons">
                  <button type="submit" className="gpt3__navbar-sign button">Submit</button>
                  <button onClick={() => setIsModalOpen(false)} className="close">Close</button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </>
  );
};

export default Navbar;
