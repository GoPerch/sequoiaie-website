import Head from "next/head";
import Image from "next/image";

const Tiles = () => {
  return (
    <div className="services_main_container">
      <Head>
        <title>Tiles Service</title>
        <meta name="description" content="Learn more about our tiles service." />
      </Head>
      <div className="servicer_cont" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h2>Tiles Service</h2>
        <p>
          We offer a wide range of tile services, and high quality installation services at affordable prices.
        </p>
      </div>
      <div className="services__we__offer">
        <div className="service">
          <Image
            className="img"
            src="/img/project-image-6.jpg"
            alt="Beautiful tiles"
            width={1000}
            height={750}
            quality={100}
          />
          <div className="service__content">
            <h2>Tiles Installation</h2>
            <p>
              We provide a variety of tile installation services to meet your needs. Our team ensures high quality and timely completion of projects.
            </p>
            <a href="/contactus">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tiles;
