
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CountryButtonProps {
  country: string;
  onClick: () => void;
  isSelected: boolean;
}

const CountryButton = ({ country, onClick, isSelected }: CountryButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "px-6 py-3 text-lg transition-all transform hover:scale-105",
        isSelected ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
      )}
    >
      {country}
    </Button>
  );
};

export default CountryButton;
