import axios, { all } from "axios";
import { useEffect, useState } from "react"
import CryptoList from "./components/CryptoList";


function App() {

  // let pageNumber = 1
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const getCryptoData = async () => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
      const data = await res.json();
      // const fetchCrypto = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
      // const fetchCrypto = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${page}&sparkline=false`)
      setCryptoData((prev) => [...prev,...data])
      setLoading(false)

    } catch (error) {
      console.log("Error While loading Data", error);
    }
  }

  useEffect(() => {
    getCryptoData()
  }, [page])

  console.log("Data Page", cryptoData);

  const handleInfiniteScroll = () => {
    console.log("Scroll Event", document.documentElement.scrollTop);
    try {
      if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
        setLoading(true)
        setPage((prev) => prev + 1)
      }
    } catch (error) {
      console.log("Error while getting data", error);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll)
    return window.removeEventListener("scroll", handleInfiniteScroll)
  })

  return (
    <>
      <div className="container mx-auto">
        <CryptoList cryptoData={cryptoData} />
        {loading && "Loading..."}
      </div>
    </>
  )
}

export default App
