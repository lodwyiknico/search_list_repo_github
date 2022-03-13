import React from 'react'

const ListRepo = ({ repo }) => {
  return (
    <div className='flex justify-center'>
        <div className="grid grid-rows-3 md:grid-flow-col gap-4">
            <div className="row-span-3 col-span-2 ">
                <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col items-center pb-10 px-10 mt-12">
                        <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={repo[0].owner.avatar_url} alt="images"/>
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{repo[0].owner.login}</h5>
                    </div>
                </div>
            </div>
            <div>
                <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-2">
                    {repo.map((v,i)=> (
                    <div key={i} className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex flex-col b-10 px-12">
                            <h6 className="mb-1 mt-3 hover:text-blue-300 font-medium text-gray-900 dark:text-white">
                                <a href={v.html_url} target="_blank" rel="noreferrer">
                                    {v.name}
                                </a>
                            </h6>
                            <p className="text-xs my-4">- {v.language!== null? v.language: 'no data'}</p>
                        </div>
                    
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListRepo