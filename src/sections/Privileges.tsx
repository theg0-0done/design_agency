import projectPlan from '../assets/project-plan.png';
import rating from '../assets/rating (1).png';
import raise from '../assets/raise.png';
import timeline from '../assets/timeline 1.png';

function Privileges() {
  return (
    <section id="privileges"
      className="flex flex-col md:flex-row md:justify-center lg:justify-center items-center gap-6 h-fit w-full py-10 lg:py-20 bg-emerald-50">
      <div className="flex flex-col lg:flex-row justify-center gap-6">
        <div className="flex flex-col items-center gap-2 h-fit p-4">
          <img src={projectPlan} alt="" />
          <p className="font-medium lg:text-xl">Completed Projects</p>
          <h1 className="text-4xl lg:text-[2.6rem] font-bold text-green-600">100+</h1>
        </div>
        <div className="flex flex-col items-center gap-2 h-fit p-6">
          <img src={rating} alt="" />
          <p className="font-medium lg:text-xl">Customer Satisfaction</p>
          <h1 className="text-4xl lg:text-[2.6rem] font-bold text-green-600">20%</h1>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center gap-6">
        <div className="flex flex-col items-center gap-2 h-fit p-4">
          <img src={raise} alt="" />
          <p className="font-medium lg:text-xl">Raised By Clients</p>
          <h1 className="text-4xl lg:text-[2.6rem] font-bold text-green-600">$10M</h1>
        </div>
        <div className="flex flex-col items-center gap-2 h-fit p-6">
          <img src={timeline} alt="" />
          <p className="font-medium lg:text-xl">Years in Business</p>
          <h1 className="text-4xl lg:text-[2.6rem] font-bold text-green-600">20%</h1>
        </div>
      </div>
    </section>
  )
}

export default Privileges