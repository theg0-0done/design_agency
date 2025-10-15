import heroImage from "../assets/Group 38.png";

function Hero() {
  return (
    <section
      className="pt-[12vh] flex h-fit w-full flex-col items-center bg-emerald-100 px-12 md:flex-row lg:px-20"
      id="hero"
    >
      <div className="my-6 flex flex-col items-center gap-4 md:w-[50vw] md:items-start">
        <h1 className="text-center text-4xl font-bold sm:text-5xl md:w-[16ch] md:text-left md:text-4xl lg:text-5xl xl:text-6xl xl:leading-16">
          Increase Your Customers Loyalty and Satisfaction
        </h1>
        <p className="text-center font-medium sm:text-xl md:text-left md:text-[1rem] lg:w-[52ch]">
          We help businesses like yours earn more customers, standout from
          competitors, make more money
        </p>
        <a href="#">
          <button className="h-auto w-fit cursor-pointer rounded-xl bg-green-600 px-10 py-3 text-left font-medium text-white hover:bg-green-800 active:bg-green-800 lg:py-4">
            Get Started
          </button>
        </a>
      </div>
      <img
        className="h-auto w-[80vw] md:max-w-[48vw] lg:max-w-[40vw] xl:w-[40rem]"
        src={heroImage}
      />
    </section>
  );
}

export default Hero;
