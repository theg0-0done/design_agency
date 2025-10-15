function Subscribtion() {
  return (
    <section
      id="subscription"
      className="flex h-fit w-full flex-col items-center gap-4 p-3 py-20"
    >
      <h4 className="text-center text-xl text-green-700 md:mb-8 md:gap-0">
        SUBSCRIBE
      </h4>
      <h1 className="text-center text-[1.75rem] font-semibold md:mb-2 md:gap-0">
        Subscribe To Get The Latest News About Us
      </h1>
      <p className="text-center text-[14px] font-semibold text-gray-500 md:mb-10 md:gap-0">
        Please drop your email below to get daily update about what we do
      </p>
      <div className="flex w-full transform justify-between rounded-xl border py-2 duration-500 ease-in-out md:w-[55vw] md:rounded-2xl md:p-1">
        <input
          className="ml-4 focus:outline-none"
          type="email"
          placeholder="Enter Your Email Adresse"
        />
        <input
          type="submit"
          name="Subscribe"
          className="hidden h-full cursor-pointer rounded-2xl border bg-orange-600 px-10 py-4 text-[1rem] font-semibold text-white transition duration-300 ease-in-out hover:scale-95 hover:border-orange-500 hover:bg-transparent hover:text-orange-500 md:flex"
        />
      </div>
      <input
        type="submit"
        name="Subscribe"
        className="cursor-pointer rounded-2xl border bg-orange-600 px-10 py-4 text-[1rem] font-semibold text-white transition duration-300 ease-in-out hover:scale-95 hover:border-orange-500 hover:bg-transparent hover:text-orange-500 md:hidden"
      />
    </section>
  );
}

export default Subscribtion;
