import Link from "next/link";
import React from "react";
import Image from "next/image";

const PageTitle = (props) => {
  return (
    <section className="page-title">
      <div className="container">
        <div className="title-wrapper">
          <ul className="innerpage-breadcrumb ps-0">
            <li><Link href="/">Home</Link></li>
            <li>{props.pageName}</li>
          </ul>
          <h1 className="title">{props.pageName}</h1>
          <p className="text">{props.pageText}</p>
        </div>
      </div>
      <Image className={props.customClass} src={props.floatImage} alt="" width={500} height={500} />
    </section>
  );
};

export default PageTitle;