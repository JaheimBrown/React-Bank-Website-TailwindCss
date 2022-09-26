import { google, apple, bill } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
  return <section  id="product" className={`${layout.sectionReverse}`}>
    <div className={`${layout.sectionImgReverse}`}>
      <img src={bill} alt="billing" className="h-[100%] w-[100%] relative" />

      {/* SECTION IMAGE */}
      <div className="absolute top-1/2 left-0 w-[50%] h-[50%] rounded-full white__gradient z-[3]" />   
      <div className="absolute bottom-0 left-0 w-[50%] h-[50%] rounded-full pink__gradient z-[0]" />   
    </div>

    {/* SECTION DETAILS */}
    <div className={`${styles.flexStart} flex-col flex-1`}>
      <h2 className={`${styles.heading2}`}>Easily control your <br className="sm:block hidden" />billing & invoicing.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>

      {/* CTA SECTION */}
    <div className="flex flex-row flex-wrap items-center mt-5">
      <img src={apple} alt="apple_store" className="w-[128px] h-[45px] object-contain cursor-pointer mr-5"  />
      <img src={google} alt="google_store" className="w-[128px] h-[45px] object-contain cursor-pointer "  />
    </div>
    </div>

    
  </section>;
};

export default Billing;
