import React from 'react'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'
import ForecastComponents from './ForeCastWeather';

const Forecast = ({ data }) => {
    const WEEK_DAYS = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];
    const dayInWeek = new Date().getDay();
    const forecastDay = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
        WEEK_DAYS.slice(0, dayInWeek)
    );

    return (
        <>
            <label className='text-lg font-bold ml-5'>Daily Forecast</label>
            <Accordion allowZeroExpanded className='pb-0.5' >
                {data.list.splice(0, 7).map((item, index) => (
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className='bg-[#f5f5f5] rounded-2xl h-16 m-2 flex items-center !cursor-pointer text-lg py-2 px-4 gap-4'>
                                    <img src={`icons/${item.weather[0].icon}.png`} alt="weather Icons" className='w-10 py-5' />
                                    <label className='text-[#212121] flex-1 font-semibold ml-4 '>{forecastDay[index]}</label>
                                    <label className='flex-1 mr-4 text-right '>{item?.weather[0].description}</label>

                                    <label className='text-[#757575]'>{Math.round(item?.main.temp_min)} °C / {Math.round(item?.main.temp_max)} °C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className='grid gap-y-0 gap-x-8 row-auto col-span-2 flex-1 grid-cols-2 py-2 px-7'>
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
        </>
    )
}

export default Forecast