import * as React from 'react';

const Contact = () => {
    return (
        <>
            <div className='container' style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
                <div className="mb-3">
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="button" className="btn btn-dark" style={{width: "200px", margin: "0 auto"}}>Envoyer</button>
            </div>
        </>
    )
}

export default Contact
