
import { Card } from "@/components/ui/card";
import type { CountryInfo as CountryInfoType } from "@/services/countryApi";

interface CountryInfoProps {
  info: CountryInfoType;
}

const CountryInfo = ({ info }: CountryInfoProps) => {
  return (
    <div className="space-y-6 py-6">
      <div className="space-y-2">
        <p><span className="font-semibold">Region:</span> {info.region}</p>
        <p><span className="font-semibold">Population:</span> {info.population.toLocaleString()}</p>
        <p className="text-gray-700 mt-4">{info.description}</p>
      </div>
      
      <div className="pt-4 border-t border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Local Experiences</h3>
        <div className="space-y-4">
          {info.testimonials?.map((testimonial, index) => (
            <div key={index} className="p-3 bg-gray-50 rounded-lg italic text-sm">
              "{testimonial}"
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
