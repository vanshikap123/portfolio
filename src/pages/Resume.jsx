import React from 'react'

const Resume = () => {
  return (
    <div>
  <div className="">
<h1 className='text-info'>Resume</h1>
                <div className="divider"></div>
                <div className="resumesection">
                  <div className="left-part">
                       <div className='Sumary line-1'>
                       <h2 className=' text-info'>Sumary</h2>
                       <div className='sumaryone'>
                        <h4  className='circle-1 w-50 border-bottom border-info'>Vanshika Pathak</h4 >
                        <ul>
                          <li>Preeti Nagar lko</li>
                          <li>(+91)8009276297</li>
                          <li>abhip@gmail.com</li>
                        </ul> 
                       </div>
                       </div>
                       <div className='eduction line my-5'>
                        <h2 className='my-3 text-info' >Eduction</h2>
                          <div className="one">
                        <h4 className='circle my-3 w-50 border-bottom border-info'>Intergal University lko</h4 >
                        <span className='ms-4 fs-5 text-info font-weight-bold'>2020-23</span>
                        <h6 className='my-1 ms-4'> Bachelor's of computer Application </h6>
                          </div>

                       </div>
                  </div>
                  <div className="right-part">
                    <div className="Professional line-2">
                           <h2 className=' text-info ' >Professional Experience</h2 >
                               <div>
                                <h4  className='circle my-3 w-50 border-bottom border-info '>Frontend Developer</h4 >
                                <span className='  ms-4 fs-5 text-info font-weight-bold'>2024</span>
                                <ul className='my-4 ms-4'>
                                  <li>Lead in the design, development, </li>
                                  <li>Make a website using HTML,CSS,JAVASCRIPT </li>
                                  <li>And React js,Bootstrap</li>
                                  <li>Basic knowledge in Tailwind CSS</li>

                                </ul>
                               </div>
                               <div className="backend">
                                <h4   className='circle my-2 w-50 border-bottom border-info'>Backend Developer</h4 >
                                <span className=' mt-4 ms-4 fs-5 text-info font-weight-bold'>
                                  2024
                                </span>
                                <ul className='my-3 ms-4'>
                                  <li>Node.js</li>
                                  <li>MongoDB</li>
                                  <li>Express js</li>
                                </ul>
                               </div>
                            </div>

                  </div>
                </div>
                <button className='btnn1 d-flex  m-auto hovers'><a href="../pdf/abhip2517@gmail.com.pdf" download>Download CV</a></button>
              </div>
    </div>
  )
}

export default Resume