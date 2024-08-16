import React, { useState } from "react";
import "./ContactUs.css";
import contactImg from "../../assets/images/contact-img.jpg";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted", formData);
  };

  return (
    <div>
      <div className="contactus-container">
        <div className="contact-container">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                required
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
                autoComplete="off"
              />
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
        <div className="image-container">
          <img src={contactImg} alt="Contact" />
        </div>
      </div>

      <div className="footer">
        <div className="first">
          <p>Email</p>
          <h4>codingclub@pilani.bits-pilani.ac.in</h4>
        </div>
        <div className="second">
          <a
            href="https://www.instagram.com/codingclub_bitsp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="25px"
              height="25px"
              fill="#8a2be2" // Purple color
            >
              <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.1.1 1.8.2 2.3.4.6.2 1.1.5 1.6 1 .4.4.7 1 .9 1.6.2.5.3 1.1.4 2.3.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.1-.2 1.8-.4 2.3-.2.6-.5 1.1-1 1.6-.4.4-1 .7-1.6.9-.5.2-1.1.3-2.3.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.1-.1-1.8-.2-2.3-.4-.6-.2-1.1-.5-1.6-1-.4-.4-.7-1-.9-1.6-.2-.5-.3-1.1-.4-2.3-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.1.2-1.8.4-2.3.2-.6.5-1.1 1-1.6.4-.4 1-.7 1.6-.9.5-.2 1.1-.3 2.3-.4 1.2-.1 1.6-.1 4.8-.1zm0-2.2c-3.3 0-3.7 0-5 .1-1.2.1-2.1.2-2.9.5-.8.3-1.5.7-2.1 1.3-.6.6-1 1.3-1.3 2.1-.3.7-.4 1.7-.5 2.9-.1 1.3-.1 1.7-.1 5s0 3.7.1 5c.1 1.2.2 2.1.5 2.9.3.8.7 1.5 1.3 2.1.6.6 1.3 1 2.1 1.3.7.3 1.7.4 2.9.5 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.2-.1 2.1-.2 2.9-.5.8-.3 1.5-.7 2.1-1.3.6-.6 1-1.3 1.3-2.1.3-.7.4-1.7.5-2.9.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.2-.2-2.1-.5-2.9-.3-.8-.7-1.5-1.3-2.1-.6-.6-1.3-1-2.1-1.3-.7-.3-1.7-.4-2.9-.5-1.3-.1-1.7-.1-5-.1zm0 5.8c-3.4 0-6.1 2.8-6.1 6.1s2.8 6.1 6.1 6.1 6.1-2.8 6.1-6.1-2.8-6.1-6.1-6.1zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm6.5-10.7c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4 1.4.6 1.4 1.4-.6 1.4-1.4 1.4z" />
            </svg>
          </a>

          <a href="https://github.com/CodingClubBITSP" target="_blank">
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.9992 5.95846C21.0087 6.565 20.9333 7.32649 20.8658 7.8807C20.8395 8.09686 20.8037 8.27676 20.7653 8.42453C21.6227 10.01 22 11.9174 22 14C22 16.4684 20.8127 18.501 18.9638 19.8871C17.1319 21.2605 14.6606 22 12 22C9.33939 22 6.86809 21.2605 5.0362 19.8871C3.18727 18.501 2 16.4684 2 14C2 11.9174 2.37732 10.01 3.23472 8.42452C3.19631 8.27676 3.16055 8.09685 3.13422 7.8807C3.06673 7.32649 2.99133 6.565 3.00081 5.95846C3.01149 5.27506 3.10082 4.5917 3.19988 3.91379C3.24569 3.60028 3.31843 3.30547 3.65883 3.11917C4.00655 2.92886 4.37274 2.99981 4.73398 3.1021C5.95247 3.44713 7.09487 3.93108 8.16803 4.51287C9.2995 4.17287 10.5783 4 12 4C13.4217 4 14.7005 4.17287 15.832 4.51287C16.9051 3.93108 18.0475 3.44713 19.266 3.1021C19.6273 2.99981 19.9935 2.92886 20.3412 3.11917C20.6816 3.30547 20.7543 3.60028 20.8001 3.91379C20.8992 4.5917 20.9885 5.27506 20.9992 5.95846ZM20 14C20 12.3128 19.6122 10 17.5 10C16.5478 10 15.6474 10.2502 14.7474 10.5004C13.8482 10.7502 12.9495 11 12 11C11.0505 11 10.1518 10.7502 9.25263 10.5004C8.35261 10.2502 7.45216 10 6.5 10C4.39379 10 4 12.3197 4 14C4 15.7636 4.82745 17.231 6.23588 18.2869C7.66135 19.3556 9.69005 20 12 20C14.3099 20 16.3386 19.3555 17.7641 18.2869C19.1726 17.231 20 15.7636 20 14ZM10 14.5C10 15.8807 9.32843 17 8.5 17C7.67157 17 7 15.8807 7 14.5C7 13.1193 7.67157 12 8.5 12C9.32843 12 10 13.1193 10 14.5ZM15.5 17C16.3284 17 17 15.8807 17 14.5C17 13.1193 16.3284 12 15.5 12C14.6716 12 14 13.1193 14 14.5C14 15.8807 14.6716 17 15.5 17Z"
                fill="#b957e8"
              ></path>
            </svg>
          </a>
          <a
            href="https://in.linkedin.com/company/coding-club-bits-pilani"
            target="_blank"
          >
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.24871 3.99327C5.24871 2.8329 6.12883 2 7.17643 2C8.2244 2 9.0966 2.8329 9.0966 3.99327C9.0966 5.13841 8.2244 6 7.17643 6C6.12883 6 5.24871 5.13841 5.24871 3.99327ZM5.93076 9.59118H8.61173V20H5.93076V9.59118ZM10.0721 9.59118H12.7693V11.1227H12.8494C13.2201 10.5325 14.0953 9.69795 15.5852 9.69795C17.9132 9.69795 19.3251 11.5738 19.3251 14.1513V20H16.6441V14.5656C16.6441 13.6721 16.4542 12.6608 15.5831 12.6608C14.6993 12.6608 13.8774 13.7307 13.8774 14.8484V20H11.1964V14.3704C11.1964 13.0586 11.2421 11.8973 11.4426 11.2549C10.1614 10.6614 8.89347 9.75963 7.25647 9.75963C5.81259 9.75963 4.34751 10.5914 4.34751 13.5302V20H1.66454V14.1504C1.66454 11.3524 2.82282 9.59118 5.93076 9.59118Z"
                fill="#b957e8"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
