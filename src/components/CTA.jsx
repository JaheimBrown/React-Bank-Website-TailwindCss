import Button from "./Button";
import styles from "../style";

const CTA = () => {
  return <section className={`flex justify-center sm:items-center items-start sm:flex-row flex-col ${styles.marginY} ${styles.padding} bg-black-gradient-2 box-shadow rounded-[20px]`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let’s try our service now!</h2>
      <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
    </div>
    
    <div className={`flex justify-start items-center sm:ml-5 ml-0 sm:mt-0 mt-10`}>
      <Button text="Get Started" />
    </div>
  </section>;
};

export default CTA;
