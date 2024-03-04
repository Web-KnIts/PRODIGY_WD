
const Weather = ({data}) =>{
    return (
        <div className="w-[600px] rounded-lg shadow-[10px_-2px_20px_2px_rgb(0_0_0/30%)] text-white bg-[#333] m-[20px_auto_0_auto] flex flex-col px-[0px_20px] py-[20px] item-center justify-center">
            <div className="flex justify-around items-center flex-row">
                <div>
                <p className=" font-semibold text-2xl tracking-[1px]">{data.city}</p>
                <p className=" font-normal text-lg">{data.weather[0].description}</p>
                </div>
                <img  src={`${data.weather[0].icon}.png`} alt="" className="w-[100px]"/>
            </div>
            <div className="flex justify-around items-center flex-row">
                <p className=" font-semibold text-6xl tracking-[-1px]">{Math.round(data.main.temp)}°c</p>
                <div className="w-[25%]">
                    <div className="flex justify-between items-center border-y-2 border-b-slate-100 mb-3">
                        <span className=" text-left font-medium text-lg m-auto">Details</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className=" text-left font-medium text-sm">feels Like</span>
                        <span>{Math.round(data.main.feels_like)}°c</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className=" text-left font-medium text-sm">Wind</span>
                        <span>{data.wind.speed} m/s</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className=" text-left font-medium text-sm">Humidity</span>
                        <span>{data.main.humidity}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className=" text-left font-medium text-sm">Pressure</span>
                        <span>{data.main.pressure}hPa</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Weather