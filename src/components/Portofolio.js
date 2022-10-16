import './style/content.css';
import foo1 from '../assets/portofolio/sansit1.jpg';

function Portofolio(){
    return (
        <div id='portofolio'>
            <div className='container px-5'>
                <div className='row'>
                    <div className='col text-center'>
                        <h2>Portofolio Kami</h2>
                    </div>
                </div>
                <div className='row mt-3  text-center'>
                    <div className='col'>
                        <div className='portofolio-section m-auto d-block overflow-auto'>
                        <button className='btn active-portofolio me-3 mb-3'>All</button>
                        <button className='btn me-3 mb-3'>Company Profile</button>
                        <button className='btn me-3 mb-3'>Bussines</button>
                        <button className='btn me-3 mb-3'>Personal</button>
                        </div>
                    </div>
                </div>
                <div className='row portofolio-cards mt-4 m-auto'>
                    <div className='col-lg-4 col-md-6'>
                        <div className="card w-100 mb-4 overflow-hidden" style={{width:'18rem'}}>
                            <img src={foo1} className="card-img-top" alt="..."/>
                            <div className="card-body p-4">
                                <h4 className="card-title fw-semibold">SANS IT</h4>
                                <p className="card-text">Websilte Landing Page portofolio sederhana meliputi profil diri dan biodata pribadi</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className='col-lg-4 col-md-6'>
                        <div className="card w-100 mb-4" style={{width:'18rem'}}>
                            <img src="" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                        <div className="card w-100 mb-4" style={{width:'18rem'}}>
                            <img src="" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                        <div className="card w-100 mb-4" style={{width:'18rem'}}>
                            <img src="" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                        <div className="card w-100 mb-4" style={{width:'18rem'}}>
                            <img src="" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                        <div className="card w-100 mb-4" style={{width:'18rem'}}>
                            <img src="" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                        <div className="card w-100 mb-4" style={{width:'18rem'}}>
                            <img src="" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                        <div className="card w-100 mb-4" style={{width:'18rem'}}>
                            <img src="" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                        <div className="card w-100 mb-4" style={{width:'18rem'}}>
                            <img src="" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Portofolio;