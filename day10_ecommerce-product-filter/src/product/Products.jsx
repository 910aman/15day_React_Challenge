import React from 'react'


const Products = ({results}) => {
  console.log("Resulted Products",results);
  return (
    <section className='flex flex-wrap justify-start mt-2 ml-5 -z-20  '>
      {results}     
     {/* <Card result={results}/> */}
     {/* <Card/>
     <Card/>
     <Card/> */}
    </section>
  )
}

export default Products