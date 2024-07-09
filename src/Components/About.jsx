import React from 'react';
import abotphoto from "../photo/img-2.jpg";
import "../Components/About.css";

function About() {
  return (
    <>
      <div className="container mt-5 mb-3">
        <h1 className="text-center">ABOUT</h1>
        <div className="row mt-5">
          <div className="img_card col-lg-6 col-md-12 mb-4">
            <img src={abotphoto} className="img-fluid" alt="About Us" />
          </div>
          <div className="col-lg-6 col-md-12 mt-3">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta facere mollitia alias obcaecati quo? Voluptatum molestias accusamus tenetur vero aliquam in voluptatem iste atque ducimus! Quia, fugiat optio? Veniam excepturi dolorem perspiciatis. Dolore nihil quasi fugiat perspiciatis inventore assumenda recusandae, commodi cupiditate magnam. Nostrum voluptatem eos dolore tempora necessitatibus, enim aliquid, perferendis error dicta harum iste consequatur similique laboriosam neque! Nam omnis cumque qui minima harum dicta sed animi aliquam fugit veniam voluptate nesciunt odit quam veritatis velit, id officiis? In ipsam ut quas iusto molestias commodi architecto impedit earum doloribus vero. Doloribus natus similique atque quae sit reiciendis adipisci.</p>
            <button className="btn btn-danger">Read More...</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
