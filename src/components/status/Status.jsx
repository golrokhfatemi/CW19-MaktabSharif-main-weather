export default function Status({ status }) {
  let iconWeather = "";
  switch (status) {
    case "Thunderstorm":
      iconWeather = "./Day Storm.png";
      break;
    case "Drizzle":
      iconWeather = "./Day Clouds.png";
      break;
    case "Rain":
      iconWeather = "./Day Rain.png";
      break;
    case "Atmosphere":
      iconWeather = "./Day Wind.png";
      break;
    case "Clear":
      iconWeather = "./Day Sun.png";
      break;
    case "Clouds":
      iconWeather = "./Day Clouds.png";
      break;
    default:
      break;
  }
  return (
    <div>
      <img src={iconWeather} alt="" className="w-[300px]" />
    </div>
  );
}
