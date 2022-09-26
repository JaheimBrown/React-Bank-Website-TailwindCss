import { feedback } from "../constants";
import styles from "../style";
import FeedBackCard from "./FeedBackCard";

const Testimonials = () => {
  return <section id="clients" className={`flex flex-col justify-between w-full ${styles.paddingY} relative`}>
    {/* Gradient */}
    <div className="absolute -right-[50%] bottom-[20%] w-[60%] h-[60%] rounded-full z-0 blue__gradient"/>

    {/* HEADING */}
    <div className="flex-1 flex md:flex-row flex-col z-[1]">
      <h2 className={styles.heading2}>What people are <br className="sm:block hidden" />saying about us</h2>
      <p className="font-poppins font-normal text-[18px] leading-[32px] max-w-[470px] mt-10 text-dimWhite">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
    </div>

     {/* FeedBack Cards */}
     <div className="flex flex-1 flex-wrap md:flex-row flex-col justify-start md:justify-between  items-start mt-10 feeback-container">
      {feedback.map(card => (
        <FeedBackCard key={card.id} {...card} />
      ))}
     </div>
  </section>;
};

export default Testimonials;
