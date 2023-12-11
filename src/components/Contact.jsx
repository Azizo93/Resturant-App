import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
    // logic for form submission here
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h1>Contact Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae facilisis ex. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto est omnis unde culpa harum facere exercitationem? Iusto in ipsam nesciunt, numquam ut temporibus totam quam quod praesentium? Eius, ipsam consequatur.
        </p>

        <div className="info-group">
          <div>
            <h5>Address</h5>
            <p>123 Main Street, Main City, SK2 6AS</p>
          </div>
          <div>
            <h5>Opening Hours</h5>
            <p>Tuesday - Sunday, 2pm - 11pm</p>
          </div>
          <div>
            <h5>Phone</h5>
            <p>0111 123 4565</p>
          </div>
          <div>
            <h5>Email</h5>
            <p>info@bazaaribites.co.uk</p>
          </div>
        </div>
      </div>

      <div className='contact-background'>
        <section className="location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9498.993331798465!2d-2.3198332128417873!3d53.47295769999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bafcd33f53739%3A0x1cb4cfc7b363b6ed!2sSkills%20City!5e0!3m2!1sen!2suk!4v1702054299527!5m2!1sen!2suk"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: '15px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Skills City Location"
          ></iframe>
        </section>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
          <button type="submit">Submit</button>
        </form>

      </div>
    </div>
  );
};

export default Contact;
