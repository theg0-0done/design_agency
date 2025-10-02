import activity from '/src/assets/Activity.png';
import heart from '/src/assets/Heart.png';
import work from '/src/assets/Work.png';
import arrow from '../assets/right-arrow.png';

function Solutions() {
  interface Card {
    text: string;
    title: string;
    image: string;
  }

  const cards: Card[] = [
    {
      image: activity,
      title: "Grow Your Business",
      text: "We help identify the best ways to improve your business",
    },
    {
      image: heart,
      title: "Improve brand loyalty",
      text: "We help identify the best ways to improve your business",
    },
    {
      image: work,
      title: "Improve Business Model",
      text: "We help identify the best ways to improve your business",
    },
  ];

  return (
    <section id="solutions" className="my-16 flex h-fit w-full flex-col px-16">
      <p className="text-xl font-medium text-emerald-700">WHAT WE DO</p>
      <h1 className="text-2xl font-bold">
        We provide the Perfect Solution to your business growth
      </h1>
      <div className="mt-14 flex w-full flex-col gap-4 md:flex-row lg:justify-between">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group flex flex-col gap-4 rounded-3xl border border-gray-200 p-8 transition duration-800 ease-in-out hover:shadow-2xl md:w-[28vw]"
          >
            <div className="flex flex-row gap-5 md:flex-col">
              <img
                src={card.image}
                className="h-20 w-20 lg:h-[5.5rem] lg:w-[5.5rem]"
                alt="activity"
              />
              <h1 className="text-xl font-semibold max-sm:text-[18px] lg:text-[1.5rem]">
                {card.title}
              </h1>
            </div>
            <p className="lg:text-[18px]">{card.text}</p>
            <a href="#">
              <button className="flex h-fit w-fit transform cursor-pointer items-center gap-2 rounded-xl border border-gray-200 px-5 py-2 duration-800 ease-in-out group-hover:bg-orange-500 group-hover:text-white active:text-white max-md:active:bg-gray-600">
                Learn More
                <img
                  src={arrow}
                  className="h-4 w-4"
                  alt="right arrow"
                />
              </button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Solutions;
