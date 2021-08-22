import React, { useState } from 'react'



const Contact = () => {
    const [data, setData] = useState({
        FullName:'',
        PhoneNumber:'',
        Email:'',
        Message:'',
    })

    const InputEvent = (event) => {
        const { name, value} = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name] : value,
            };
        });
    };

    const FormSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.FullName}. My mobile number is ${data.PhoneNumber}. My email is ${data.Email} and here is what i want to say ${data.Message} `);
    };
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact-div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={FormSubmit} >
                            <div className="mb-3">
                                <label for="InputName" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="InputName" name='FullName' value={data.FullName} onChange={InputEvent} placeholder="Enter Your Name" required />
                            </div>
                            <div className="mb-3">
                                <label for="Phone number" class="form-label">Phone number</label>
                                <input type="Phone number" class="form-control" id="InputNumber" name='PhoneNumber' value={data.PhoneNumber} onChange={InputEvent} placeholder="Enter Your Phone Number" required/>
                            </div>
                            <div className="mb-3">
                                <label for="InputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="InputEmail1" name='Email' value={data.Email} onChange={InputEvent} placeholder="Enter Your Email" required/>
                            </div>
                            <div className="mb-3">
                                <label for="InputPassword1" class="form-label">Message</label>
                                <textarea class="form-control" name='Message' value={data.Message} onChange={InputEvent} id="InputPassword1" rows="3" required/>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="Check1" />
                                <label class="form-check-label" for="Check1">Check me out</label>
                            </div>
                            <button type="submit" class="mb-3 btn btn-outline-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;