import Hero from '../assets/programming.svg'
import './style/header.css';

function Header() {
  return (
    <div className='jumbotron'>
      <div className='container jumbotron position-relative'>
          <div className='row d-flex align-items-center position-absolute top-50 translate-middle-y w-100'>
              <div className='col-lg-6 px-5 text-left Title'>
                  <h1 className='display-6 fw-semibold'>Solusi bagi anda untuk membangun Bisnis</h1>
                  <p className='fs-5 mt-3'>Kami membantu anda untuk membuat Applikasi, Website, dan komunitas yang anda inginkan secara Digital</p>
                  <button className='btn btn-primary btn-lg shadow rounded-3 px-4 mt-3 me-3 py-3'>Mulai Sekarang</button>
                  <button className='btn border border-primary text-primary btn-lg rounded-3 mt-3 px-4 py-3'>Lihat Portofolio <i class="bi bi-arrow-right-short"></i></button>
              </div>
              <div className='col-lg-6 text-end d-lg-block d-none'>
                  <img src={Hero} alt="logo" />
              </div>
          </div>
      </div>
    </div>
  );
}

export default Header;