import './Hom.css';
import logo_1 from "../photo/img-2.jpg";
import logo_2 from "../photo/img-15.jpg";
import logo_3 from "../photo/img-11.jpg";
import sofa_2 from "../photo/img-16.webp";
import chair_1 from "../photo/132-1329549_chair-png-image-free-download-plastic-chair-with.png";
import chair_2 from "../photo/chair-2.webp";
import sofa_1 from "../photo/sofa.png";
import sofa_5 from "../photo/sofa-2.jpg";
import sofa_6 from "../photo/img-12.jpg";

function Home() {
  return (
    <>
      <div className="section_content">
        <div className="content_text">
          <h1>Make Your Home Modern Design.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quod explicabo animi dolore quos expedita!</p>
          <button className="btn btn-primary">Shop Now</button>
        </div>
      </div>

      <div className="container mt-5">
        <h1 className="text-center mb-5">SERVICES WE OFFER</h1>
        <div className="row d-flex justify-content-center">
          <div className="card card_card col-lg-4 col-md-6 col-sm-12 mb-4">
            <img src={logo_1} className="card-img-top" alt="Custom Menus" />
            <div className="card-body">
              <h5 className="card-title text-center">CUSTOM MENUS</h5>
              <p className="card-text text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda magnam architecto perferendis, veniam nostrum dolorem earum dolorum officia incidunt.</p>
              <a href="#" className="btn btn-danger">View More</a>
            </div>
          </div>

          <div className="card card_card col-lg-4 col-md-6 col-sm-12 mb-4">
            <img src={logo_2} className="card-img-top" alt="Smartest Way" />
            <div className="card-body">
              <h5 className="card-title text-center">SMARTEST WAY</h5>
              <p className="card-text text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda magnam architecto perferendis, veniam nostrum dolorem earum dolorum officia incidunt.</p>
              <a href="#" className="btn btn-danger">View More</a>
            </div>
          </div>

          <div className="card card_card col-lg-4 col-md-6 col-sm-12 mb-4">
            <img src={logo_3} className="card-img-top" alt="User Friendly" />
            <div className="card-body">
              <h5 className="card-title text-center">USER FRIENDLY</h5>
              <p className="card-text text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda magnam architecto perferendis, veniam nostrum dolorem earum dolorum officia incidunt.</p>
              <a href="#" className="btn btn-danger">View More</a>
            </div>
          </div>

          <div className="card card_card_bacground col-lg-3 col-md-6 col-sm-12 mt-5 mb-4">
            <div className="content_card">
              <h1>Best Chair</h1>
              <p>Lorem, ipsum dolor.</p>
              <button className="btn btn-danger btn_btn">View More</button>
            </div>
          </div>

          <div className="card card_card_bacground_2 col-lg-3 col-md-6 col-sm-12 mt-5 mb-4">
            <div className="content_card">
              <h1>Sofa</h1>
              <p>Lorem, ipsum dolor.</p>
              <button className="btn btn-danger btn_btn">View More</button>
            </div>
          </div>

          <div className="card card_card_bacground_3 col-lg-3 col-md-6 col-sm-12 mt-5 mb-4">
            <div className="content_card">
              <h1>Work Desk</h1>
              <p>Lorem, ipsum dolor.</p>
              <button className="btn btn-danger btn_btn">View More</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h1 className="text-center mb-4">TRENDY PRODUCTS</h1>
        <div className="row d-flex justify-content-center">
          <div className="card card_section_3 col-lg-3 col-md-4 col-sm-6 mb-4 text-center">
            <img src={sofa_1} className="card-img-top" alt="Best Sofa" />
            <hr />
            <div className="card-body">
              <h5 className="card-title">Best Sofa</h5>
              <p className="card-text">$1000.50</p>
              <button className="btn btn-danger">Shop New</button>
            </div>
          </div>

          <div className="card card_section_3 col-lg-3 col-md-4 col-sm-6 mb-4 text-center">
            <img src={chair_2} className="card-img-top" alt="New Chair" />
            <hr />
            <div className="card-body">
              <h5 className="card-title">New Chair</h5>
              <p className="card-text">$300.50</p>
              <button className="btn btn-danger">Shop New</button>
            </div>
          </div>

          <div className="card card_section_3 col-lg-3 col-md-4 col-sm-6 mb-4 text-center">
            <img src={chair_1} className="card-img-top" alt="Best Chair" />
            <hr />
            <div className="card-body">
              <h5 className="card-title">Best Chair</h5>
              <p className="card-text">$1000.50</p>
              <button className="btn btn-danger">Shop New</button>
            </div>
          </div>

          <div className="card card_section_3 col-lg-3 col-md-4 col-sm-6 mb-4 text-center">
            <img src={sofa_2} className="card-img-top" alt="New Sofa" />
            <hr />
            <div className="card-body">
              <h5 className="card-title">New Sofa</h5>
              <p className="card-text">$550.50</p>
              <button className="btn btn-danger">Shop New</button>
            </div>
          </div>

          <div className="card card_section_3 col-lg-3 col-md-4 col-sm-6 mb-4 text-center">
            <img src={sofa_5} className="card-img-top" alt="New Sofa" />
            <hr />
            <div className="card-body">
              <h5 className="card-title">New Sofa</h5>
              <p className="card-text">$550.50</p>
              <button className="btn btn-danger">Shop New</button>
            </div>
          </div>

          <div className="card card_section_3 col-lg-3 col-md-4 col-sm-6 mb-4 text-center">
            <img src={sofa_6} className="card-img-top" alt="New Sofa" />
            <hr />
            <div className="card-body">
              <h5 className="card-title">New Sofa</h5>
              <p className="card-text">$550.50</p>
              <button className="btn btn-danger">Shop New</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
