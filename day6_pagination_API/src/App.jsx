import { useEffect, useState } from 'react'
import Pagination from './components/Pagination'
import SkeletonData from './components/SkeletonData';
import axios from 'axios';

function App() {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  const fetchData = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products?limit=100');
      setData(response.data.products);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <>
      <div className='bg-[#333] py-4 px-10 container mx-auto h-full flex flex-col justify-center'>

        {loading ? <SkeletonData /> : <Pagination fetchData={fetchData} axiosData={data} />}
      </div>
    </>
  )
}

export default App
