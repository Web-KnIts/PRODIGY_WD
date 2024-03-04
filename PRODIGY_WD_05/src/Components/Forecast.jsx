import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion"

const Weeks = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
const  ForecastTag = ({data})=>{
    const currentDay = new Date().getDay();
    const DayForecast = Weeks.slice(currentDay,Weeks.length).concat(Weeks.slice(0,currentDay))
    return(
        <>
        <label htmlFor="details" className=" text-5xl font-bold block text-center m-[20px]">Forecasting :-</label>
        <Accordion allowZeroExpanded>
            {data.list.splice(0,7).map((item,idx)=>(
                    <AccordionItem key={idx}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className="bg-white rounded-xl h-14 m-[5px] flex items-center justify-around cursor-pointer text-lg p-[5px]">
                                <img src={`${item.weather[0].icon}.png`} alt="weather" className=" w-[80px]" />
                                <label htmlFor="day" className="text-black font-semibold ml-5">{DayForecast[idx]}</label>
                                <label htmlFor="discription" className="">{item.weather[0].description}</label>
                                <label htmlFor="min-max-Temp" className="">{Math.round(item.main.temp_min)}°c / {Math.round(item.main.temp_max)}°c</label>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className=" grid gap-x-[15px] gap-y-[1px] grid-cols-[auto_auto] flex-[1_1] p-[5px_15px] ">
                            <div className=" flex items-center h-[30px] justify-center gap-[20px]">
                                <label className="text-[#757575]">Feels Like</label>
                                <label htmlFor="pressure_details">{Math.round(item.main.feels_like)}°c</label>
                            </div>
                            <div className=" flex items-center h-[30px] justify-center gap-[20px]">
                                <label className="text-[#757575]">Pressure</label>
                                <label htmlFor="pressure_details">{item.main.pressure}</label>
                            </div>
                            <div className=" flex items-center h-[30px] justify-center gap-[20px]">
                                <label className="text-[#757575]">Humidity</label>
                                <label htmlFor="humidity_details">{item.main.humidity}</label>
                            </div>
                            <div className=" flex items-center h-[30px] justify-center gap-[20px]">
                                <label className="text-[#757575]">Clouds</label>
                                <label htmlFor="clouds_details">{item.clouds.all}</label>
                            </div>
                            <div className=" flex items-center h-[30px] justify-center gap-[20px]">
                                <label className="text-[#757575]">Wind Speed</label>
                                <label htmlFor="wind_speed_details">{item.wind.speed} m/s</label>
                            </div>
                            <div className=" flex items-center h-[30px] justify-center gap-[20px]">
                                <label className="text-[#757575]">Sea Level</label>
                                <label htmlFor="pressure_details">{item.main.sea_level} m</label>
                            </div>
                        </div>
                    </AccordionItemPanel>
                    </AccordionItem>
            ))}
        </Accordion>
        </>
    )
}
export default ForecastTag