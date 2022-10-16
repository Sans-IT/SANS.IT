import './style/content.css';
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css';

function Service(){
    return(
        <div id='service'>
            <div className="container px-5">
                <div className='row'>
                    <div className='col-12 text-center'>
                        <h2>Layanan Kami</h2>
                    </div>
                    <div className='container mt-5'>
                        <div className='row text-center row-services'>
                            <div className='col-lg-3 col-md-6 mb-4'>                    
                                <div className="card w-100 d-lg-block d-flex flex-row h-100 p-3" style={{width: '18rem'}}>
                                    <i className='bi bi-building display-2 p-4 m-auto'></i>
                                    <div className="card-body py-3 p-0">
                                        <h3 className="card-title mb-3">Bisnis</h3>
                                        <p className="card-text">Membangun Bisnis untuk profile perusahaanmu.</p>                                        
                                    </div>
                                </div>
                            </div>       
                            <div className='col-lg-3 col-md-6 mb-4'>                    
                                <div className="card w-100 d-lg-block d-flex flex-row h-100 p-3" style={{width: '18rem'}}>
                                    <i className='bi bi-check display-2 p-4 m-auto'></i>
                                    <div className="card-body py-3 p-0">
                                        <h3 className="card-title mb-3">Fleksibilitas</h3>
                                        <p className="card-text">Jasa Terjangkau kepada semua kalangan.</p>                                        
                                    </div>
                                </div>
                            </div>        
                            <div className='col-lg-3 col-md-6 mb-4'>                    
                                <div className="card w-100 d-lg-block d-flex flex-row h-100 p-3" style={{width: '18rem'}}>
                                    <i className='bi bi-phone display-2 p-4 m-auto'></i>
                                    <div className="card-body py-3 p-0">
                                        <h3 className="card-title mb-3">Website & App</h3>
                                        <p className="card-text">Membuat Web dengan tampilan yang indah.</p>                                        
                                    </div>
                                </div>
                            </div>   
                            <div className='col-lg-3 col-md-6 mb-4'>                    
                                <div className="card w-100 d-lg-block d-flex flex-row h-100 p-3" style={{width: '18rem'}}>
                                    <i className='bi bi-gear display-2 p-4 m-auto'></i>
                                    <div className="card-body py-3 p-0">
                                        <h3 className="card-title mb-3">Perawatan</h3>
                                        <p className="card-text">Kami tetap menjamin perawatan Applikasi sampai tahap akhir.</p>                                        
                                    </div>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;