import React from "react";
import Image from "next/image";
import Link from "next/link";

const WhyWorkWithUs = () => {
  return (
    <>
    {/* Cards Section */}
    <div className="header__cards__container">
          <div className="card" style={{ backgroundImage: 'url(/img/cardbg.jpg)' }}>
            <div className="card__content">
              <h3>Tiles</h3>
              <p>This is a description of the first card. It gives a brief insight into the content.</p>
              <Link legacyBehavior href="/tiles">
                <a className="card__btn">Learn More</a>
              </Link>
            </div>
          </div>

          <div className="card" style={{ backgroundImage: 'url(/img/cardbg2.jpg)' }}>
            <div className="card__content">
              <h3 className="card_title">Interiors</h3>
              <p>This is a description of the second card. It provides more details for users to explore.</p>
              <Link legacyBehavior href="/interiors">
                <a className="card__btn">Learn More</a>
              </Link>
            </div>
          </div>

          <div className="card" style={{ backgroundImage: 'url(/img/cardbg.jpg)' }}>
            <div className="card__content">
              <h3>Export Import</h3>
              <p>This is a description of the third card, offering additional information for users.</p>
              <Link legacyBehavior href="/export-import">
                <a className="card__btn">Learn More</a>
              </Link>
            </div>
          </div>
        </div>
    <div className="why__work__with__us">
      <h1>Why work with Us?</h1>
      <hr className="red__underline" />
      <div className="company__info">
        <div className="customers">
          <h1 className="red__number">1,237+</h1>
          <p>Satisfied Customers</p>
        </div>
        <div className="branches">
          <h1 className="red__number">3+</h1>
          <p>Active Branches</p>
        </div>
        <div className="years__of__excellence">
          <h1 className="red__number">20+</h1>
          <p>Years of Excellence</p>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default WhyWorkWithUs;
