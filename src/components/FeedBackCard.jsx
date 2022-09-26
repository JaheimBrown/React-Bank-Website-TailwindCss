import { quotes } from "../assets";

const FeedBackCard = ({content, name, title, img}) => {
  return <div className="flex flex-col justify-between items-start feedback-card px-10 py-10 w-[375px] h-[395px] rounded-[20px] cursor-pointer xl:mb-0 mb-10 mr-0 sm:mr-6">
    <img src={quotes} alt="quotes" />
    <p className="font-poppins font-normal text-[18px] leading-[32px] text-white mt-10">{content}</p>
    <div className="flex flex-row justify-center items-center">
        <img src={img} alt={name} className="h-[48px] w-[48px] rounded-full mr-5" />
        <div className=" flex-1 flex flex-col ">
          <h3 className="font-poppins font-noraml text-[20px] leading-[32px] text-white">{name}</h3>
          <p className="font-poppins font-normal text-[16px] leading-[24px] mt-1 text-dimWhite">{title}</p>
        </div>
    </div>
  </div>;
};

export default FeedBackCard;
