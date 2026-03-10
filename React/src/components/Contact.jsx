import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message Sent Successfully!");
    
    // Clear form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
        
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Message:</label><br />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>
          Send Message
        </button>

      </form>
    </div>
  );
}

export default Contact;
