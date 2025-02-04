import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div
      className="header"
      style={{ position: "relative", width: "100%", height: "100vh" }}
    >
      <Image
        className="img"
        src="/img/blackbg.jpg"
        alt="Background image"
        layout="fill"
        priority={true}
        quality={100}
      />

      <div className="header__container">
        <h1>Trust the Professionals of the Industry.</h1>
        <div>
          <Link legacyBehavior href="/#who__are__we">
            <a className="header__white__btn">About Us</a>
          </Link>
          <Link legacyBehavior href="/contactus">
            <a className="header__red__btn"> Get Quote</a>
          </Link>
        </div>

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
      </div>
    </div>
  );
};

export default Header;
