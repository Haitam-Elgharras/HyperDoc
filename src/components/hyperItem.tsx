
import icons from "../utils/icons";

interface IconProps {
    name: string;
}

type IconComponents = {
  [key: string]: React.FC<any>;
};

const HyperItem = ({ name}: IconProps) => {
    const Icon = (icons as IconComponents)[name];
    
  return (
    <>
   {
   Icon && (
    <div >
      <Icon className={`w-8 h-8 text-[#576ee0] group-hover:hidden`} />
      <span className={`text-[#ffff] font-semibold group-hover:block hidden`}>{name}</span>
    </div>
    )
  }

  </>
  )
}

export default HyperItem;