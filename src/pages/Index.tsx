
import { useState } from "react";
import { toast } from "sonner";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { X } from "lucide-react";
import CityCard from "@/components/CityCard";
import CityInfo from "@/components/CityInfo";
import { fetchCountryInfo } from "@/services/countryApi";
import type { CountryInfo as CountryInfoType } from "@/services/countryApi";
import Header from "@/components/Header";
import { RotateCw } from "lucide-react";

const Index = () => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [cityInfo, setCityInfo] = useState<CountryInfoType | null>(null);
  const [loading, setLoading] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const palestinianCities = [
    {
      name: "Gaza",
      arabicName: "غزة",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be"
    },
    {
      name: "Nablus",
      arabicName: "نابلس",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
    },
    {
      name: "Ramallah",
      arabicName: "رام الله",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"
    },
    {
      name: "Jerusalem",
      arabicName: "القدس",
      image: "https://images.unsplash.com/photo-1562979314-bee7453e911c"
    },
    {
      name: "Hebron",
      arabicName: "الخليل",
      image: "https://images.unsplash.com/photo-1544734037-32d6264bd660"
    },
    {
      name: "Bethlehem",
      arabicName: "بيت لحم",
      image: "https://images.unsplash.com/photo-1545292914-cd30db066075"
    },
    {
      name: "Jericho",
      arabicName: "أريحا",
      image: "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7"
    },
    {
      name: "Jenin",
      arabicName: "جنين",
      image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
    },
    {
      name: "Tulkarm",
      arabicName: "طولكرم",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e"
    },
    {
      name: "Haifa",
      arabicName: "حيفا",
      image: "https://images.unsplash.com/photo-1585779034823-7e9ac8ed2225"
    },
    {
      name: "Acre",
      arabicName: "عكا",
      image: "https://images.unsplash.com/photo-1611275117685-5dfd5f7f86e0"
    },
    {
      name: "Nazareth",
      arabicName: "الناصرة",
      image: "https://images.unsplash.com/photo-1571490120487-301c5b7ded7d"
    },
    {
      name: "Safed",
      arabicName: "الصفد",
      image: "https://images.unsplash.com/photo-1614642264762-d7dd71cb8d50"
    },
    {
      name: "Khan Yunis",
      arabicName: "خان يونس",
      image: "https://images.unsplash.com/photo-1593510987169-d8fa2c5d6faf"
    },
    {
      name: "Qalqilya",
      arabicName: "قلقيلية",
      image: "https://images.unsplash.com/photo-1612977048749-6b5dd7dd0ace"
    },
    {
      name: "Rafah",
      arabicName: "رفح",
      image: "https://images.unsplash.com/photo-1608111288997-5cc1aa6f9895"
    },
    {
      name: "Tiberias",
      arabicName: "طبريا",
      image: "https://images.unsplash.com/photo-1603787226863-25be2d1f0533"
    },
    {
      name: "Beit Jala",
      arabicName: "بيت جالا",
      image: "https://images.unsplash.com/photo-1600493050171-5960d02e0aa0"
    },
    {
      name: "Hebron Old City",
      arabicName: "البلدة القديمة في الخليل",
      image: "https://images.unsplash.com/photo-1587874522487-4c31e6a3abb7"
    }
  ];

  const handleCitySelect = async (city: string) => {
    setSelectedCity(city);
    setLoading(true);
    setIsSheetOpen(true);
    setCityInfo(null);
    setErrorMessage(null);
    
    try {
      const info = await fetchCountryInfo(city, false);
      setCityInfo(info);
      toast.success(`Successfully loaded information for ${city}`);
    } catch (error) {
      console.error("Error fetching city information:", error);
      
      let message = "Could not load information. Please try again later.";
      
      if (error instanceof Error) {
        if (error.message.includes('rate limit')) {
          message = "API rate limit reached. Please try again in a few minutes.";
        } else if (error.message.includes('Invalid API key')) {
          message = "API key issue. Service temporarily unavailable.";
        } else {
          message = error.message || message;
        }
      }
      
      setErrorMessage(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const handleRegenerateTestimonials = async () => {
    if (!selectedCity) return;
    
    setLoading(true);
    setErrorMessage(null);
    
    try {
      const info = await fetchCountryInfo(selectedCity, true);
      setCityInfo(info);
      toast.success(`Successfully refreshed information for ${selectedCity}`);
    } catch (error) {
      console.error("Error regenerating testimonials:", error);
      
      let message = "Failed to refresh information. Please try again later.";
      
      if (error instanceof Error) {
        if (error.message.includes('rate limit')) {
          message = "API rate limit reached. Please try again in a few minutes.";
        } else if (error.message.includes('Invalid API key')) {
          message = "API key issue. Service temporarily unavailable.";
        } else {
          message = error.message || message;
        }
      }
      
      setErrorMessage(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 bg-clip-text text-transparent mb-6 leading-tight tracking-comfort">
            Palestinian Heritage Explorer
          </h2>
          <p className="font-sans text-2xl font-light text-gray-300/90 mb-12 tracking-comfort">
            أرشيف التراث الفلسطيني التفاعلي
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {palestinianCities.map((city) => (
            <CityCard
              key={city.name}
              name={city.name}
              arabicName={city.arabicName}
              image={city.image}
              onClick={() => handleCitySelect(city.name)}
              isSelected={selectedCity === city.name}
              className="bg-background shadow-professional dark:shadow-professional-dark"
            />
          ))}
        </div>

        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-2xl font-bold">
                {selectedCity}
                <button
                  onClick={() => setIsSheetOpen(false)}
                  className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </button>
              </SheetTitle>
            </SheetHeader>

            {loading ? (
              <div className="flex items-center justify-center h-40">
                <div className="flex flex-col items-center">
                  <RotateCw className="h-8 w-8 animate-spin text-primary mb-2" />
                  <p className="text-gray-500">Loading city information...</p>
                </div>
              </div>
            ) : errorMessage ? (
              <div className="p-6 text-center">
                <div className="rounded-lg bg-red-50 dark:bg-red-900/20 p-4 my-4">
                  <p className="text-red-800 dark:text-red-200">{errorMessage}</p>
                </div>
                <button
                  onClick={() => handleCitySelect(selectedCity!)}
                  className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Try again
                </button>
              </div>
            ) : cityInfo ? (
              <div className="space-y-4">
                <CityInfo info={cityInfo} />
                <button
                  onClick={handleRegenerateTestimonials}
                  disabled={loading}
                  className="w-full mt-4 py-3 px-4 
                    bg-gradient-to-r from-purple-500 to-purple-600 
                    text-white 
                    rounded-lg 
                    flex items-center justify-center 
                    gap-2 
                    hover:from-purple-600 hover:to-purple-700 
                    transition-all duration-300 
                    disabled:opacity-50"
                >
                  <RotateCw 
                    className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} 
                  />
                  Refresh Information
                </button>
              </div>
            ) : null}
          </SheetContent>
        </Sheet>
      </main>
    </div>
  );
};

export default Index;
