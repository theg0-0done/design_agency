import { useState } from "react";

function Testimonials() {
  let [current, setCurrent] = useState(0);
  const slideWidth = window.innerWidth >= 768 ? 50 : 70;
  const halfSlideWidth = window.innerWidth >= 768 ? 25 : 35;
  const gap = window.innerWidth >= 768 ? 32 : 16;

  interface Slide {
    profile: string;
    name: string;
    job: string;
    review: string;
  }

  const slides: Slide[] = [
    {
      profile: "/src/assets/avatar.png",
      name: "1 Amily Stones",
      job: "CEO, Marketing Goru",
      review:
        "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service",
    },
    {
      profile: "/src/assets/avatar.png",
      name: "2 Amily Stones",
      job: "CEO, Marketing Goru",
      review:
        "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service",
    },
    {
      profile: "/src/assets/avatar.png",
      name: "3 Amily Stones",
      job: "CEO, Marketing Goru",
      review:
        "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service",
    },
    {
      profile: "/src/assets/avatar.png",
      name: "4 Amily Stones",
      job: "CEO, Marketing Goru",
      review:
        "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service",
    },
    {
      profile: "/src/assets/avatar.png",
      name: "5 Amily Stones",
      job: "CEO, Marketing Goru",
      review:
        "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service",
    },
    {
      profile: "/src/assets/avatar.png",
      name: "6 Amily Stones",
      job: "CEO, Marketing Goru",
      review:
        "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service",
    },
    {
      profile: "/src/assets/avatar.png",
      name: "7 Amily Stones",
      job: "CEO, Marketing Goru",
      review:
        "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service",
    },
    {
      profile: "/src/assets/avatar.png",
      name: "8 Amily Stones",
      job: "CEO, Marketing Goru",
      review:
        "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service",
    },
    {
      profile: "/src/assets/avatar.png",
      name: "9 Amily Stones",
      job: "CEO, Marketing Goru",
      review:
        "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service",
    },
    {
      profile: "/src/assets/avatar.png",
      name: "10 Amily Stones",
      job: "CEO, Marketing Goru",
      review:
        "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service",
    },
  ];

  function nextSlide() {
    if (current === slides.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  }
  function previousSlide() {
    if (current === 0) {
      setCurrent(slides.length - 1);
    } else {
      setCurrent(current - 1);
    }
  }

  return (
    <section
      id="testimonials"
      className="relative h-fit w-full px-1 py-6 md:px-28"
    >
      <h1 className="text-xl font-medium text-emerald-700 max-md:px-15">
        TESTIMONIALS
      </h1>
      <p className="w-fit text-[1.75rem] font-semibold max-md:px-15">
        See what our customersay about us
      </p>
      <div className="flex items-center justify-between overflow-hidden">
        <div
          onClick={previousSlide}
          className="left-0 flex h-12 w-13 cursor-pointer items-center justify-center rounded-full border transition duration-800 ease-in-out hover:border-none hover:bg-emerald-100 md:top-10"
          title="Previous"
        >
          <img className="rotate-90" src="/src/assets/down-arrow.png" />
        </div>

        <div className="relative flex w-full items-center justify-center overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(calc(50% - ${current * slideWidth}vw - ${halfSlideWidth}vw - ${current * gap}px)`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`mx-2 my-10 mt-20 w-[70vw] flex-shrink-0 rounded-2xl border border-gray-100 p-2 py-8 shadow-xl transition-all duration-500 md:mx-4 md:w-[50vw] md:px-12 ${index === current ? "scale-100 opacity-100" : "scale-90 opacity-50"}`}
              >
                <div className="mb-10 flex items-center gap-4 md:mb-10">
                  <img
                    className="h-12 w-12 rounded-full bg-gray-200"
                    src={slide.profile}
                    alt=""
                  />
                  <div>
                    <h3 className="w-[16ch] font-semibold md:text-xl">
                      {slide.name}
                    </h3>
                    <p>{slide.job}</p>
                  </div>
                </div>
                <p className="md:text-xl">{slide.review}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          onClick={nextSlide}
          className="top-20 right-0 flex h-12 w-13 cursor-pointer items-center justify-center rounded-full border transition-all duration-800 ease-in-out hover:border-transparent hover:bg-emerald-100 active:bg-emerald-300 md:top-10"
          title="Next"
        >
          <img className="-rotate-90" src="/src/assets/down-arrow.png" />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
