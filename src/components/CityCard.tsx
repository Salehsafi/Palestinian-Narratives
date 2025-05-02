
import { Card } from "@/components/ui/card";

interface CityCardProps {
  name: string;
  arabicName: string;
  image: string;
  onClick: () => void;
  isSelected: boolean;
  className?: string;
}

const CityCard = ({ 
  name, 
  arabicName, 
  image, 
  onClick, 
  isSelected, 
  className = '' 
}: CityCardProps) => {
  return (
    <Card
      className={`
        relative overflow-hidden cursor-pointer transition-all duration-300
        hover:scale-105 group dark:bg-card
        ${isSelected ? 'ring-2 ring-yellow-500/50' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      <div className="relative aspect-[4/3]">
        <img
          src={image}
          alt={`${name} region`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h3 className="font-playfair text-2xl font-semibold mb-1 tracking-comfort">{name}</h3>
          <p className="font-sans text-lg opacity-90">{arabicName}</p>
        </div>
      </div>
    </Card>
  );
};

export default CityCard;
