import React from 'react'
import CryptoCard from './CryptoCard'
const CryptoList = ({ cryptoData }) => {
  console.log("Crypto", cryptoData);

  return (
    <div className=''>
      <h1 className='flex justify-center py-2 my-5 font-bold text-3xl text-[#ecab49] bg-gray-200 '>  CryptoList</h1>
      <section className='flex flex-wrap justify-center mb-4 gap-6  '>
        {cryptoData?.map((crypto, index) => {
          return <CryptoCard myData={crypto} key={index} />
        })}
      </section>
    </div>
  )
}

export default CryptoList