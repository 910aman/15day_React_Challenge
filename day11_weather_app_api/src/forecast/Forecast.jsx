import React from 'react'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'
import ForecastComponents from './ForeCastWeather'

const Forecast = ({ data }) => {
    const WEEK_DAYS = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];
    const dayInWeek = new Date().getDay();
    const forecastDay = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
        WEEK_DAYS.slice(0, dayInWeek)
    );

    return (
        <div className='pl-5'>
            <label className='text-lg font-bold'>Daily Forecast in 3Hrs</label>
            <Accordion allowZeroExpanded className='pb-0.5 flex flex-wrap flex-grow ' >
                {data.list.splice(0, 8).map((item, index) => (
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className='bg-[#96e68b] rounded-2xl h-fit m-4 flex flex-col !cursor-pointer text-lg px-4 gap-4 py-2'>
                                    <div className='flex flex-col w-full justify-center'>
                                        <div className='w-full flex justify-between'>
                                            <label className='text-[#212121] font-semibold flex items-center'>{(item?.dt_txt).substring(11, 16)}</label>
                                            <img src={`icons/${item.weather[0].icon}.png`} alt="weather Icons" className='h-10 w-10 flex justify-center' />
                                        </div>
                                        <label className='mt-2 text-[#757575] font-medium'>{Math.round(item?.main.temp_min)}°C / {Math.round(item?.main.temp_max)}°C</label>
                                        <label className='font-semibold'>{item?.weather[0].description}</label>
                                    </div>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className='grid gap-y-0 row-auto col-span-2 flex-1 py-2 px-3 bg-green-100 mx-4 rounded-lg'>
                                <ForecastComponents value={"Humidity"} label={`${item?.main.humidity} %`} />
                                <ForecastComponents value={"Pressure"} label={`${item?.main.pressure} hPa`} />
                                <ForecastComponents value={"Clouds"} label={`${item?.clouds.all} %`} />
                                <ForecastComponents value={"Wind Speed"} label={`${item?.wind.speed} m/s`} />
                                <ForecastComponents value={"Sea Level"} label={`${item?.main.sea_level} m`} />
                                <ForecastComponents value={"Feels Like"} label={`${item?.main.feels_like} °C`} />
                            </div>

                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}

export default Forecast