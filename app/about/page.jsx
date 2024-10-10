import React from "react";
import Style from "./about.module.css";
import Image from "next/image";

const aboutPage = () => {
  return (
    <div className={Style.container}>
      <div className={Style.aboutMessage}>
        <h2 className={Style.title}>about our company</h2>
        <h1 className={Style.companyMessage}>
          Initiative aimed at creating an engaging and user-friendly platform
        </h1>

        <p className={Style.description}>
          Our mission is to provide users with an intuitive and seamless
          experience while describe what the website does, e.g., accessing
          resources, making purchases, showcasing their work. We believe that
          technology should be accessible and enjoyable for everyone.
        </p>
        <div className={Style.boxes}>
          <div className={Style.box}>
            <h1 className={Style.box_tag}>50+</h1>
            <p className={Style.box_paragraph}>fullstack developer</p>
          </div>
          <div className={Style.box}>
            <h1 className={Style.box_tag}>40+</h1>
            <p className={Style.box_paragraph}>MERN</p>
          </div>
          <div className={Style.box}>
            <h1 className={Style.box_tag}>60+</h1>
            <p className={Style.box_paragraph}>android developer</p>
          </div>
          <div className={Style.box}>
            <h1 className={Style.box_tag}>10+</h1>
            <p className={Style.box_paragraph}>graphics designer</p>
          </div>
        </div>
      </div>
      <div className={Style.aboutImage}>
        <Image
          className={Style.Image}
          src="/image1.webp"
          alt="image about"
          fill
        />
      </div>
    </div>
  );
};

export default aboutPage;
