
import type { CountryInfo as CountryInfoType } from "@/services/countryApi";

interface CityInfoProps {
  info: CountryInfoType;
}

const CityInfo = ({ info }: CityInfoProps) => {
  return (
    <div className="space-y-6 py-6 dark:text-gray-200">
      <div className="space-y-2">
        <p><span className="font-semibold">Region:</span> {info.region}</p>
        <p><span className="font-semibold">Population:</span> {info.population.toLocaleString()}</p>
        <p className="text-gray-700 dark:text-gray-300 mt-4">{info.description}</p>
      </div>
      
      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-4">Local Experiences</h3>
        <div className="space-y-4">
          {info.testimonials?.map((testimonial, index) => (
            <div key={index} className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg italic text-sm">
              "{testimonial}"
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CityInfo;
