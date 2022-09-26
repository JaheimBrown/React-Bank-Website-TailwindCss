import { logo} from "../assets";
import { footerLinks, socialMedia } from "../constants";
import styles from "../style";

const Footer = () => {
  return <section className={`${styles.flexStart} flex-col ${styles.paddingY} ${styles.paddingX}`}>
    {/* Website information and other links */}
    <div className={`flex justify-between items-start flex-row flex-wrap flex-1 w-full gap-10`}>
      <div className="flex flex-col items-start justify-start mr-10">
        <img src={logo} alt="Hoobank" className="w-[184px] h-[51px] object-contain" />
        <p className="font-poppins font-normal text-[18px] leading-[32px] mt-5 text-dimWhite max-w-[310px]">A new way to make the payments easy, reliable and secure.</p>
      </div>

      {footerLinks.map((item, index) => (
        <div key={item.title} className={`flex justify-start items-start flex-col flex-1 ${footerLinks.length - 1 !== index ? 'mr-12' : 'mr-0'} min-w-[120px]`}>
          <h3 className="font-poppins font-semibold text-[20px] leading-[27px] text-center text-white mb-3">{item.title}</h3>
          <ul>
            {item.links.map((linkItem, index) => (
              <li key={linkItem.link} className={`font-poppins font-normal text-[16px] leading-[28px] text-dimWhite ${item.links.length - 1 !== index ? 'mb-2' : 'mb-0'} cursor-pointer`}>{linkItem.name}</li>
            ))}
          </ul>
        </div>
      ))}

    </div>

    {/* copyright and socials media */}
    <div className={`flex flex-col sm:flex-row flex-1 justify-between items-start sm:items-center mt-12 w-full`}>
          <p className="font-poppins font-normal text-[18px] text-dimWhite leading-[27px] max-w-[380px] sm:max-w-full">Copyright &copy; 2021 HooBank. All Rights Reserved.</p>

              <div className="flex flex-row justify-center items-center gap-5 mt-5 sm:mt-0">
        {socialMedia.map(social => (
          <img key={social.id} src={social.icon} alt={social.id} className="w-[21px] h-[21px] object-contain cursor-pointer" />
          ))}
          </div>
    </div>
  </section>;
};

export default Footer;
