import banner from "../../assets/banner2.jpg";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="container text-white text-left space-y-8">
          <h1 className="mb-5 text-xl md:text-5xl font-bold text-left">
            Celebrate The Event With Us !
          </h1>
          <p className="mb-5 text-left  capitalize text-gray-200 ">
            Join us next Friday for an enriching exploration of Asia! Dive into
            the vibrant cultures, traditions, and innovations that define this
            dynamic continent. From its rich history to its cutting-edge
            advancements, our event promises to illuminate the diverse tapestry
            of Asia's influence on the world stage. Whether you're captivated by
            ancient traditions, intrigued by modern developments, or simply
            eager to expand your horizons
          </p>
          <button className="btn bg-primaryColor text-white px-8 border-none">
            Book Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
