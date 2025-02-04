import Head from "next/head";
import Image from "next/image";

const Interiors = () => {
  return (
    <div className="services_main_container">
      <Head>
        <title>Interiors Service</title>
        <meta name="description" content="Learn more about our interiors service." />
      </Head>
      <div className="servicer_cont" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h2>Interiors Service</h2>
        <p>
          We offer a wide range of interior design services, and high quality installation services at affordable prices.
        </p>
      </div>
      <div className="services__we__offer">
        <div className="service">
          <Image
            className="img"
            src="/img/project-image-10.jpg"
            alt="Beautiful interiors"
            width={1000}
            height={750}
            quality={100}
          />
          <div className="service__content">
            <h2>Interior Design</h2>
            <p>
              Our interior design services are tailored to meet your needs. We ensure high quality and timely completion of projects.
            </p>
            <a href="/contactus">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interiors;
