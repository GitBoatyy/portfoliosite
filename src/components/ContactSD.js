import React from "react";
export default function ContactSD(){
    return(
        <section id="contactSD">
            <div className="containercontact">
                <form netlify name="contact" className="contactform" >
                    <h2 className="grayf">
                        Contact Me
                    </h2>
                    <p className="grayf">
                    If you have an opportunity to share, or would like to discuss anything, you can leave your details below.                    </p>
                        <div className="formcontainer ">
                            <div className="grayf contactinput">
                                <input className="contactinput" type="text" id="name" name="name" placeholder="Name"/>
                            </div>
                            <div className="grayf contactinput">
                                <input className="contactinput" type="email" id="email" name="email" placeholder="Email" />
                            </div>
                            <div className="grayf contactinput">
                                <textarea className="contactinput" id="message" name="message" placeholder="Message"/>
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