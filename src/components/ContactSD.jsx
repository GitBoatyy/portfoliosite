import React from "react";

export default function ContactSD(){
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    
    function encode(data) {
        return Object.keys(data)
          .map(
            (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
          )
          .join("&");
      }
    
      function handleSubmit(e) {
        e.preventDefault();
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", name, email, message }),
        })
          .then(() => alert("Message sent!"))
          .catch((error) => alert(error));
      }
    
    return(
        <section id="contactSD">
            <div id='containercontact' className="containercontact">
                <form 
                netlify
                name="contact" 
                onSubmit={handleSubmit}
                className="contactform" >
                    <h2 className="grayf">
                        Contact Me
                    </h2>
                    <p className="grayf">
                    If you have an opportunity to share, or would like to discuss anything, you can leave your details below.                    </p>
                        <div className="formcontainer ">
                            <div className="contactinput">
                                <input name="name" 
                                onChange={(e) => setName(e.target.value)} 
                                className="contactinput" 
                                type="text" 
                                id="name" 
                                placeholder="Name"
                                required/>
                            </div>
                            <div className="contactinput">
                                <input name="email"
                                onChange={(e) => setEmail(e.target.value)} 
                                className="contactinput" 
                                type="email" 
                                id="email" 
                                placeholder="Email" 
                                required/>
                            </div>
                            <div className="contactinput">
                                <textarea name="message" 
                                onChange={(e) => setMessage(e.target.value)} 
                                className="contactinput" 
                                id="message" 
                                placeholder="Message"
                                required/>
                            </div>
                            <button type="submit">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
        </section>
    )
}