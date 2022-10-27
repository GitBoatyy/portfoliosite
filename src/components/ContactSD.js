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
            <div className="containercontact">
                <form data-netlify="true" method="POST" name="contact" className="contactform" onSubmit={handleSubmit}>

                    <h2 className="grayf">
                        Contact Me
                    </h2>
                    <p className="grayf">
                    If you have an opportunity to share, or would like to discuss anything, you can leave your details below.                    </p>
                        <div className="formcontainer ">
                            <div className="contactinput">
                                <input onChange={(e) => setName(e.target.value)} className="contactinput" type="text" id="name" name="name" placeholder="Name"/>
                            </div>
                            <div className="contactinput">
                                <input onChange={(e) => setEmail(e.target.value)} className="contactinput" type="email" id="email" name="email" placeholder="Email" />
                            </div>
                            <div className="contactinput">
                                <textarea onChange={(e) => setMessage(e.target.value)} className="contactinput" id="message" name="message" placeholder="Message"/>
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