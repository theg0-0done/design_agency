function Footer() {
  return (
    <footer className="flex h-fit w-full flex-col bg-emerald-400 p-16">
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="flex flex-col gap-4">
          <a className="text-2xl font-semibold text-black" href="#">
            Design<span className="font-bold text-white">AGENCY</span>
          </a>
          <p className="w-[32ch]">
            Some footer text about the Agency. Just a little description to help
            people understand you better
          </p>
          <div className="flex flex-row gap-5">
            <a href="https://www.facebook.com" target="_blank">
              <img
                className="h-auto w-10 transition duration-200 ease-in-out hover:scale-110"
                src="https://cdn-icons-png.flaticon.com/128/1384/1384005.png"
                alt="facebook icon"
              />
            </a>
            <a href="https://x.com" target="_blank">
              <img
                className="h-auto w-10 transition duration-200 ease-in-out hover:scale-110"
                src="https://cdn-icons-png.flaticon.com/128/3669/3669691.png"
                alt="X icon"
              />
            </a>
            <a href="https://linkedin.com" target="_blank">
              <img
                className="h-auto w-10 transition duration-200 ease-in-out hover:scale-110"
                src="https://cdn-icons-png.flaticon.com/128/1384/1384014.png"
                alt="linkedin icon"
              />
            </a>
            <a href="https://instagram.com" target="_blank">
              <img
                className="h-auto w-10 transition duration-200 ease-in-out hover:scale-110"
                src="https://cdn-icons-png.flaticon.com/128/3670/3670274.png"
                alt="instagram icon"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:mx-auto">
          <h4 className="text-xl font-semibold">Quick Links</h4>
          <a
            className="w-fit transition duration-200 ease-in-out hover:scale-110 hover:font-semibold"
            href="#solutions"
          >
            Services
          </a>
          <a
            className="w-fit transition duration-200 ease-in-out hover:scale-110 hover:font-semibold"
            href="#portfolios"
          >
            Portfolio
          </a>
          <a
            className="w-fit transition duration-200 ease-in-out hover:scale-110 hover:font-semibold"
            href="#"
          >
            About Us
          </a>
          <a
            className="w-fit transition duration-200 ease-in-out hover:scale-110 hover:font-semibold"
            href="#subscription"
          >
            Contact Us
          </a>
        </div>
        <div className="flex flex-col gap-6">
          <h4 className="text-xl font-semibold">Adresse</h4>
          <p className="w-[26ch]">
            Design Agency Head Office. Place Road 123 Country
          </p>
        </div>
      </div>
      <p className="mt-10 text-xl text-gray-800">
        Copyright &copy; Design Agency 2025
      </p>
    </footer>
  );
}

export default Footer;
