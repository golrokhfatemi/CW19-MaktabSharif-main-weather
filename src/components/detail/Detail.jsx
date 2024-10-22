/* eslint-disable react/prop-types */
export default function Detail({ data }) {
  const K = data?.main?.temp;
  const C = Math.ceil(K - 273.15);
  return (
    <div className="bg-purple-300/30 p-4 rounded-3xl backdrop-blur-[2px] shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] shadow-white w-96 h-96 text-white flex justify-center items-center flex-col gap-4">
      <p className="font-semibold text-2xl">{data?.name} ({data?.weather[0]?.main})</p>
      <p className="font-bold text-lg">temp : {C} C</p>
      <p className="font-bold text-lg">Humidity : {data?.main.humidity}</p>
      <p className="font-bold text-lg">Feels like : {Math.ceil((data?.main.feels_like)- 273.15)} C</p>
    </div>
  );
}
