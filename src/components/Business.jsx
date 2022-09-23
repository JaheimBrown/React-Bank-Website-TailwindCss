import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

// FeaturedCard Component
const FeaturedCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row  p-6 cursor-pointer  feature-card rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } `}
  >
    <div
      className={` w-[64px] h-[64px]  rounded-full ${styles.flexCenter}   bg-dimBlue `}
    >
      <img src={icon} alt="icon" className=" h-[50%] w-[50%] object-contain" />
    </div>

    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-medium text-[18px] leading-4 text-white mb-2">
        {title}
      </h4>
      <p className="font-poppins font-normal text-[16px] leading-6 text-dimWhite">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="features" className={`${layout.section}`}>
      <div className={`${layout.sectionInfo} md:mb-0 mb-[20px] `}>
        <h2 className={`${styles.heading2}`}>
          You do the business,
          <br className="sm:block hidden" /> we’ll handle the money.
        </h2>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles="mt-10" text="Get Started" />
      </div>

      {/* Featured Cards */}
      <div className="flex-1 flex flex-col justify-center items-start ">
        {features.map((feature, index) => (
          <FeaturedCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
