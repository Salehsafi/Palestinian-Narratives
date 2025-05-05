
// Using a more stable API key setup - the original key may be expired or rate-limited
const API_KEY = "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";

export interface CountryInfo {
  name: string;
  population: number;
  region: string;
  description: string;
  testimonials: string[];
}

export const fetchCountryInfo = async (city: string, isRegenerating: boolean = false): Promise<CountryInfo> => {
  console.log(`Fetching data for ${city} using ChatGPT API...`);
  
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: isRegenerating 
              ? "You are a helpful assistant that provides new and different information about Palestinian cities. Make sure to provide unique, varied perspectives each time."
              : "You are a helpful assistant that provides detailed information about different Palestinian cities and areas."
          },
          {
            role: "user",
            content: `Please provide information about ${city} in Palestine in JSON format with the following structure EXACTLY, with no additional text before or after the JSON: 
            {
              "name": "City name",
              "population": 123456,
              "region": "Palestine",
              "description": "Brief city description",
              "testimonials": [
                "General testimonials for people who have been to the city",
                "Another General testimonials for people who have been to the city",
                "A third General testimonials for people who have been to the city"
              ]
            }`
          }
        ],
        temperature: isRegenerating ? 0.9 : 0.7,
        max_tokens: 800
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("API error details:", errorData);
      
      if (errorData.error?.type === "requests" && errorData.error?.code === "rate_limit_exceeded") {
        throw new Error("API rate limit reached. Please try again later.");
      } else if (errorData.error?.code === "invalid_api_key") {
        throw new Error("Invalid API key. Please update the API key.");
      }
      
      throw new Error(errorData.error?.message || "Failed to fetch city information");
    }

    const data = await response.json();
    
    if (!data.choices?.[0]?.message?.content) {
      throw new Error("Invalid API response structure");
    }
    
    const responseText = data.choices[0].message.content.trim();
    console.log("API Response:", responseText);
    
    try {
      const parsed = JSON.parse(responseText);
      
      if (!parsed.name || !parsed.population || 
          !parsed.region || !parsed.description || 
          !Array.isArray(parsed.testimonials)) {
        throw new Error("Missing required fields in API response");
      }
      
      return parsed;
    } catch (parseError) {
      console.error("JSON parsing error:", parseError);
      throw new Error("Failed to parse API response: " + parseError.message);
    }
  } catch (error) {
    console.error("API request error:", error);
    // No mock data - just propagate the error to be handled in the UI
    throw error;
  }
};
