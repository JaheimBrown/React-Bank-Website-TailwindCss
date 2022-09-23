import styles from "../style";
import { stats } from "../constants";

const Stats = () => (
  <section className="flex flex-wrap justify-start items-start sm:mb-[20px] ">
    {stats.map((stat, index) => (
      <div
        key={stat.id}
        className={`flex flex-1 justify-start items-center sm:mr-[16px] mr-[8px]  sm:mb-0 mb-[12px] `}
      >
        <h4 className="font-poppins font-semibold text-[28px] sm:text-[44px] sm:mr-[12px] mr-[16px] leading-[52px] text-white">
          {stat.value}
        </h4>
        <p className="font-poppins text-[16px] sm:text-[20px] leading-[26px] text-gradient ">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
