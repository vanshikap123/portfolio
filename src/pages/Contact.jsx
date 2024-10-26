import React from 'react'

const Contact = () => {
  return (
    <div>
        <h1 className='text-info'>Contact </h1>
        <div className="divider"></div>
      <div className='row  p-2 bg-black'>
        <div className="col-md-6 col-sm-12 ">
            <h4 className='text-info'>Location: </h4><h6 className='fs-5'>Preeti Nagar ,Anna Market Lucknow UP</h6>
            <h4 className='text-info'>Email:</h4> <h6 className='fs-5'>abhip@gmail.com</h6>
            <h4 className='text-info'>Contact: </h4><h6 className='fs-5'>8009276297</h6>
      <iframe className='w-100 p-3' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d455767.3026321199!2d80.7337524!3d26.8182507!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfe1698dcd309%3A0xb4085600dd53562c!2sMaa%20Chandrika%20Devi%20Temple!5e0!3m2!1sen!2sin!4v1718014318514!5m2!1sen!2sin" width={500} height={300} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

        </div>
        
        <div className="col-md-6 ">
  <form className=' p-3 bg-black text-white border border-info'>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label"> Your Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
    <input type="email" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Subject</label>
    <input type="text" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Message</label>
    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: 100}} defaultValue={""} />

  </div>
  <button className="btnn1 text-center m-auto">Send Message</button>
</form>

        </div>

      </div>
    </div>
  )
}

export default Contact