export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Kamil</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Software Engineer</span>{" "}
          </h1>
          <p className="hero--section-description">
   
Versatile backend developer with expertise in both relational and NoSQL databases, 
adept in microservices architecture and a good machine learning background. Experienced in GCP services such as Cloud Composer and Dataflow,
 and proficient in Java and Python. Proven track record in end-to-end application development 
 and seamless integration across various technologies.

          </p>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/Kamil_photo.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
