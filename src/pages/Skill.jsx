import React from 'react'

const Skill = () => {
  return (
    <div>
       <div className="row  mb-5 me-5 ">
                <h1 className="ms-2 ">Skill</h1>
                <div className="col-md-12 mb-5">
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className='three'>
                                <h5>HTML</h5>
                              <h5>100%</h5>
                            </div>
                            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                 <div className="progress-bar one"></div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className='three'>
                                <h5>React</h5>
                              <h5>70%</h5>
                            </div>
                            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                 <div class="progress-bar two" ></div>
                          </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className='three'>
                                <h5>CSS</h5>
                              <h5>100%</h5>
                            </div>
                            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                 <div class="progress-bar four" ></div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className='three'>
                                <h5>NODE.JS</h5>
                              <h5>60%</h5>
                            </div>
                            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                 <div class="progress-bar pagesee" ></div>
                          </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className='three'>
                                <h5>JAVASCRIPT</h5>
                              <h5>80%</h5>
                            </div>
                            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="80">
                                 <div className="progress-bar five" ></div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className='three'>
                                <h5>MONGODB</h5>
                              <h5>20%</h5>
                            </div>
                            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                 <div class="progress-bar six" style={{width: "20%"}}></div>
                          </div>
                        </div>
                    </div>
            </div>
    </div>
  )
}

export default Skill