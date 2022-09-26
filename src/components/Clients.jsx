import { clients } from "../constants";
import styles from "../style";

const Clients = () => {
  return <section className="flex justify-center items-center">
    <div className="flex flex-1 flex-row flex-wrap justify-around items-center ">
      {clients.map(client => (
        <div key={client.id} className="w-[192px] h-[60px] mr-5 cursor-pointer">
          <img src={client.logo} alt="client" className="w-[192px] h-[40px]  object-contain "/>
        </div>
      ))}
    </div>

  </section>;
};

export default Clients;
