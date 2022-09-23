import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary h-[100%] w-[100%] rounded-full`}
    >
      <div
        className={`${styles.flexCenter} font-poppins text-[18px] font-semibold`}
      >
        <span className="text-gradient">Get</span>
        <img src={arrowUp} alt="arrow h-[23px] w-[23px] object-contain" />
      </div>

      <div
        className={`${styles.center} font-poppins text-[18px] font-semibold`}
      >
        <span className="text-gradient">Started</span>
      </div>
    </div>
  </div>
);

export default GetStarted;
