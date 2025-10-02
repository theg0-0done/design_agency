function Subscribtion() {
  return (
    <section
      id="subscription"
      className="flex h-fit w-full flex-col items-center p-3 py-20"
    >
      <h4 className="mb-8 text-center text-xl text-green-700">SUBSCRIBE</h4>
      <h1 className="mb-2 text-center text-[1.75rem] font-semibold">
        Subscribe To Get The Latest News About Us
      </h1>
      <p className="mb-10 text-center text-[14px] font-semibold text-gray-500">
        Please drop your email below to get daily update about what we do
      </p>
      <div className="flex w-full transform justify-between rounded-2xl border p-1 duration-500 ease-in-out md:w-[55vw]">
        <input
          className="ml-4 focus:outline-none"
          type="email"
          placeholder="Enter Your Email Adresse"
        />
        <input
          type="submit"
          name="Subscribe"
          className="h-full cursor-pointer rounded-2xl border bg-orange-600 px-10 py-4 text-[1rem] font-semibold text-white transition duration-300 ease-in-out hover:scale-95 hover:border-orange-500 hover:bg-transparent hover:text-orange-500"
        />
      </div>
    </section>
  );
}

export default Subscribtion;
