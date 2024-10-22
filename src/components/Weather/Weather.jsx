import { useQuery } from "@tanstack/react-query";
import Detail from "../detail/Detail";
import Status from "../status/Status";
import axios from "axios";
import { useState } from "react";

const fetchWeather = async (city) => {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  );
  console.log(res.data);
  return res.data;
};

function Weather() {
  const [city, setCity] = useState("tehran");
  const [queryCity, setQueryCity] = useState("tehran"); 
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["weather", queryCity],
    queryFn: () => fetchWeather(queryCity),
    enabled: !!queryCity, 
  });

  const handleSearch = () => {
    setQueryCity(city); 
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(); 
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-8 bg-[#5D69F6] min-h-screen bg-[url('/bg.svg')] bg-cover bg-opacity-75">
        <div className="flex flex-row gap-7">
        <input
          placeholder="Enter City"
          className="bg-purple-300/30 p-4 rounded-3xl backdrop-blur-[2px] shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] shadow-white w-96 text-white flex justify-center items-center"
          value={city} 
          onChange={(e) => setCity(e.target.value)} 
          onKeyDown={handleKeyDown} 
        />
        <button 
          onClick={handleSearch}
          className="bg-blue-500 text-white p-2 rounded-3xl"
        >
          Search
        </button>
        </div>
        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>Error fetching data: {error.message}</p>
        ) : (
          data && (
            <div className="flex flex-row gap-20">
              <Detail data={data} />
              <Status status={data.weather[0].main} />
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Weather;
