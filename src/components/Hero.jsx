import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    {/* Left Section */}
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> Discount For{" "}
          <span className="text-white">1 Month</span> Account
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className=" flex-1 font-poppins font-semibold ss:text-[72px] text-white text-[52px] ss:leading-[100px] leading-[75px] ">
          The Next <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Generation</span>
        </h1>

        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>
      <h1 className=" font-poppins font-semibold ss:text-[60px] text-white text-[52px] ss:leading-[100px] leading-[75px] ">
        Payment Gateway.
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>

    {/* Rigth Section */}
    <div className="flex-1 relative sm:mt-0 mt-[40px]">
      <img
        src={robot}
        alt="billing"
        className="h-[100%] w-[100%] relative z-[5]"
      />

      {/* Gradient */}
      <div className="absolute top-0 pink__gradient h-[40%] w-[80%] z-[0]" />
      <div className="absolute bottom-20 white__gradient h-[60%] w-[80%] z-[3]" />
      <div className="absolute bottom-20 blue__gradient h-[50%] w-[80%] z-[4]" />
    </div>

    <div className={`ss:hidden ${styles.flexStart} mt-[20px]`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
