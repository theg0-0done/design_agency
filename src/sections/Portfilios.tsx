function Portfilios() {
  return (
    <section
      id="portfolios"
      className="flex h-fit w-full transform flex-col gap-3 px-16 py-20 duration-600 ease-in-out lg:gap-6 xl:px-28"
    >
      <h1 className="text-xl font-medium text-emerald-700">OUR PORTFOLIO</h1>
      <p className="text-3xl font-semibold">
        We provide the Perfect Solution to your business growth
      </p>
      <div className="my-10 w-full space-y-20 sm:gap-16 md:columns-2 lg:gap-20">
        <div className="flex h-fit w-full flex-col justify-start gap-5">
          <img className="h-auto" src="/src/assets/portfolio-1.png" alt="" />
          <h1 className="text-2xl font-semibold">
            Digital Marketing Agency Website
          </h1>
          <p>
            This is a website for a client who want to achieve their goals and
            meet their users needs while also increasing their reach. Accross
            all platforms. This is a website rebrand.
          </p>
        </div>
        <div className="flex h-fit w-full flex-col justify-start gap-5">
          <img className="h-auto" src="/src/assets/portfolio-2.png" alt="" />
          <h1 className="text-2xl font-semibold">
            Digital Marketing Agency Website
          </h1>
          <p>
            This is a website for a client who want to achieve their goals and
            meet their users needs while also increasing their reach. Accross
            all platforms. This is a website rebrand.
          </p>
        </div>
        <div className="flex h-fit w-full flex-col justify-start gap-5">
          <img className="h-auto" src="/src/assets/portfolio-3.png" alt="" />
          <h1 className="text-2xl font-semibold">
            Digital Marketing Agency Website
          </h1>
          <p>
            This is a website for a client who want to achieve their goals and
            meet their users needs while also increasing their reach. Accross
            all platforms. This is a website rebrand.
          </p>
        </div>
        <div className="flex h-fit w-full flex-col justify-start gap-5">
          <img className="h-auto" src="/src/assets/portfolio-4.png" alt="" />
          <h1 className="text-2xl font-semibold">
            Digital Marketing Agency Website
          </h1>
          <p>
            This is a website for a client who want to achieve their goals and
            meet their users needs while also increasing their reach. Accross
            all platforms. This is a website rebrand.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Portfilios;
