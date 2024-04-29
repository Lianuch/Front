import React from 'react'

const Price = () => {
  return (
    <div id='price' className='h-96 bg-temp bg-fixed text-white p-4'>
        <h1 className='text-4xl text-center'>Price</h1>
        <div className="container mt-2 flex justify-center items-center">
        <table className='table-auto border'>
          <thead className='border'>
            <tr className=''>
              <th>Senior</th>
              <th>Barber</th>
              <th>Junior</th>
            </tr>
          </thead>
          <tbody className=''>
            <tr>
              <td>Man haircut</td>
              <td>Nozzle</td>
              <td>Hair styling</td>
            </tr>
          </tbody>
        </table>
        </div>
    </div>
  )
}

export default Price