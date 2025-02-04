import Head from "next/head";
import Image from "next/image";

const ExportImport = () => {
  return (
    <div className="services_main_container">
      <Head>
        <title>Export Import Service</title>
        <meta name="description" content="Learn more about our export import service." />
      </Head>
      <div className="servicer_cont" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h2>Export Import Service</h2>
        <p>
          We offer a wide range of export and import services, ensuring high quality and timely delivery.
        </p>
      </div>
      <div className="services__we__offer">
        <div className="service">
          <Image
            className="img"
            src="/img/project-image-4.jpg"
            alt="Export and Import"
            width={1000}
            height={750}
            quality={100}
          />
          <div className="service__content">
            <h2>Export Import</h2>
            <p>
              Our export and import services are designed to meet your needs. We ensure high quality and timely delivery of goods.
            </p>
            <a href="/contactus">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportImport;
