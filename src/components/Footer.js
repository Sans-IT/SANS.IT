import Logo from "../assets/Logo.png";

function Footer(){
    return (
    <footer className="py-5 bg-dark">
        <div className='container px-5'>
            <div className="row text-white">
                <div className='foo-1 col-lg-4 col-md-6 col-12 mb-3'>
                    <h3 className='d-flex align-items-center fw-bold mb-3'><img src={Logo} width='40px' className='me-3' />SANS IT</h3>
                    <ul className="navbar-nav flex-column">
                        <a><i className='bi bi-geo-alt'></i> Jl. Medokan Sawah Timur 2e No.8, Kec. Rungkut, Kota Surabaya, Jawa Timur 60295</a>
                        <a href='https://wa.me/+622081333570925'><i className='bi bi-whatsapp'></i> +62 813-3357-0925</a>
                        <a><i className='bi bi-envelope'></i> steven.sansit@gmail.com</a>
                    </ul>
                </div>
                <div className='foo-2 offset-lg-1 col-lg-4 col-md-6 col-12 mb-3'>
                    <h5>Navigasi</h5>
                    <ul className="navbar-nav flex-column" style={{fontSize:'0.9em'}}>
                        <a className="nav-link p-0 mb-2" href="#">Home</a>
                        <a className="nav-link p-0 mb-2" href="#">Portofolio</a>
                        <a className="nav-link p-0 mb-2" href="#">Galeri</a>
                        <a className="nav-link p-0 mb-2" href="#">Mulai dengan Kami</a>
                    </ul>
                </div>
                <div className='foo-3 col-lg-3 col-md-6 col-12 mb-3'>
                    <h5>Sosial Media Kami</h5>
                    <a href='https://www.instagram.com/sans_it_/' target='_blank'><i className='bi bi-instagram fs-3 me-3'></i></a>
                    <a href='https://www.facebook.com/Steven.SANS.IT/' target='_blank'><i className='bi bi-facebook fs-3'></i></a>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;