import React from 'react'

const DownloadPdf = () => {
    return (
        <div>
            <button type='submit'
                // onClick={saveAsPDF}
                className="block w-fit rounded-md border-0 py-3 px-4  bg-gray-500 text-gray-100 text-lg  font-semibold ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:leading-6">
                Download
            </button>
        </div>
    )
}

export default DownloadPdf