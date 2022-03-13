import React from 'react'

const ListRepo = () => {
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3">
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10 mt-12">
                <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="images"/>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
            </div>
        </div>
        </div>
        <div className="col-span-2">
        <div className="grid grid-cols-2 gap-2">
            {[1,2,2,3,4,12,1,1,1,1,1,1,1].map((v,i)=> (
            <div key={i} className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col b-10 px-12">
                    <h5 className="mb-1 text-xl hover:text-blue-300 font-medium text-gray-900 dark:text-white">
                    <a href="https://www.google.com" target="_blank" rel="noreferrer">
                    logFile
                    </a>
                    </h5>
                </div>
            </div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default ListRepo