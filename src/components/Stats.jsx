import styles from "../style";
import { stats } from "../constants";

const Stats = () => (
  <section className="flex flex-wrap justify-start items-start">
    {stats.map((stat, index) => (
      <div key={stat.id} className={`flex flex-1 justify-start items-center `}>
        {/* <span
          className={` ${
            index !== 0 ? "h-[32px] w-[3px] bg-gray-500  mr-[48px]" : ""
          }`}
        /> */}

        <h4 className="font-poppins font-semibold text-[32px] sm:text-[40px] mr-[16px] leading-[52px] text-white">
          {stat.value}
        </h4>
        <p className="font-poppins text-[20px] sm:text-[18px] leading-[26px] text-gradient ">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
