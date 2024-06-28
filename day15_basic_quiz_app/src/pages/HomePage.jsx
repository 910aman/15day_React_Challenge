import Banner from '../assets/banner.svg'
import { useNavigate } from 'react-router-dom';

const HomePage = ({ Categories, setCategorySelect, categorySelect }) => {
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!categorySelect) {
            alert("Select any one category")
            return;
        }
        else {
            navigate("/quiz",)
        }
    }

    // const saveAsPDF = () => {
    //     // <PDFDownloadLink document={<Pdf_Convert />} fileName='QuizApp'>
    //     //     {({ loading }) => loading ? (<p>Loading Document</p>) : (<p>Download</p>)}
    //     // </PDFDownloadLink>
    //     console.log("Data is downloading");
    // }

    return (
        <div className='w-full flex h-[650px] py-14 '>
            <div className="w-[50%] flex flex-col justify-center items-center h-full ">
                <p className='text-center font-semibold text-stone-900 text-3xl'>Quiz WebApp</p>
                <div className='pt-10 flex flex-col gap-4 items-center '>
                    
                    <select
                        type="text"
                        name="category"
                        id="category"
                        className="w-[500px] grid grid-cols-3 text-center gap-5 whitespace-nowrap text-[1.3rem]  rounded-md border-0 py-2 px-3  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:leading-6"
                        placeholder="Select Category"
                        value={categorySelect}
                        onChange={(e) => setCategorySelect(e.target.value)} >
                        {Categories.map((data, index) => (
                            <option key={index} value={data.val} className={` text-white py-3 hover:bg-[#6d5858] bg-gray-500`} >
                                {data.category}
                            </option>
                        ))}
                    </select>

                    <button onClick={() => handleSubmit()}
                        type='submit'
                        className="block w-[500px] rounded-md border-0 py-3 pl-7 bg-gray-500 text-gray-100 text-xl  font-semibold ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:leading-6">
                        Start Quiz
                    </button>
                </div>
            </div>
            <div>
                <img src={Banner} alt="Banner Image" />
            </div>
        </div>
    )
}

export default HomePage