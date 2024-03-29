import React from 'react'

const ContactList = (props) => {
  const {contacts, handleEdit, handleDelete, handleView} = props
  return (
    <div className='container mx-auto py-5'>
      <div className='bg-white p-5 w-full rounded-lg shadow mx-auto'>
        <div className="flex flex-col">
          {/* <div className="overflow-x-auto sm:-mx-6 lg:-mx-8"> */}
            {/* <div className="py-1 inline-block min-w-full sm:px-6 lg:px-8"> */}
              <div className="overflow-hidden">
                <table className="min-w-full text-sm table-auto md:table-fixed text-center border shadow-sm">
                  <thead className="border-b text-center dark:bg-gray-800">
                    <tr>
                      <th scope="col" className="text-sm font-light text-white px-6 py-4">
                        #
                      </th>
                      <th scope="col" className="text-sm font-light text-white px-6 py-4">
                        Name
                      </th>
                      <th scope="col" className="text-sm font-light text-white px-6 py-4">
                        Email
                      </th>
                      <th scope="col" className="text-sm font-light text-white px-6 py-4">
                        Contact
                      </th>
                      <th scope="col" className="text-sm font-light text-white px-6 py-4">
                        Address
                      </th>
                      <th scope="col" className="text-sm font-light text-white px-6 py-4">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      contacts && contacts.length > 0 ? 
                      contacts.map((lists, index) => (
                        <tr className="bg-white border-b" key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {index +=1 }
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {lists.name}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {lists.email}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {lists.contact}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {lists.address}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <div className="inline-flex focus:shadow-lg" role="group">
                              <button 
                              onClick={() => {handleEdit(lists)}}
                              type="button" data-tooltip-target="tooltip-hover" data-tooltip-trigger="hover" className="rounded-l inline-block px-4 py-1.5 text-blue font-medium text-xs leading-tight uppercase hover:bg-amber-500 focus:bg-amber-500 focus:outline-none focus:ring-0 active:bg-yellow-800 transition duration-150 ease-in-out">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.5} stroke="currentColor" className="w-5 h-5">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                    </svg>
                              </button>

                              <div id="tooltip-hover" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-500">
                                  Tooltip content
                                  <div className="tooltip-arrow" data-popper-arrow></div>
                              </div>

                              <button 
                              onClick={() => {handleDelete(lists.id)}}
                              type="button" className="inline-block px-4 py-1.5 text-blue font-medium text-xs leading-tight uppercase hover:bg-red-400 focus:bg-red-400 focus:outline-none focus:ring-0 active:bg-red-400 transition duration-150 ease-in-out">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.5} stroke="currentColor" className="w-5 h-5">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                              </button>
                              <button 
                              onClick={() => {handleView(lists.id)}}
                              type="button" className="rounded-r inline-block px-4 py-1.5 text-blue font-medium text-xs leading-tight uppercase hover:bg-blue-400 focus:bg-blue-400 focus:outline-none focus:ring-0 active:bg-blue-400 transition duration-150 ease-in-out">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.5} stroke="currentColor" className="w-5 h-5">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                              </button>
                            </div>
                            </td>
                        </tr>
                      ))
                      :
                      <tr>
                          <td colSpan={6} className="p-5">
                              <h1>Empty Data</h1>
                              <h4 className='lead'>No details displayed.</h4>
                          </td>
                      </tr>
                    }
                  </tbody>
                </table>
              </div>
            {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default ContactList