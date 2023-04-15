import React, { useMemo } from 'react'
import MaterialReactTable from "material-react-table"
import { activeOrdersColumns, activeOrdersData } from '../mock/mockData'

const ActiveOrder = () => {
  const columns = useMemo(()=>activeOrdersColumns)

  return (
    <div className='mt-10 border border-neutral-300 rounded-lg p-6'>
        <div className='flex justify-between'>
        <h2 className='font-semibold'>Active Orders</h2>
        <h2 className='text-primary font-semibold'>View all orders</h2>
        </div>
        <div>

<table className="table-auto w-full mt-8 ">
        <thead>
          <tr>
            {activeOrdersColumns.map((column, index) => (
              <th
                key={`header-${index}`}
                className="py-2 px-4 text-left font-medium text-gray-500"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {activeOrdersData.map((row, rowIndex) => (
            <tr key={`row-${rowIndex}`} className=" border-b-gray-200">
              {activeOrdersColumns.map((column, columnIndex) => (
                <td
                  key={`cell-${columnIndex}`}
                  className="border-b-2 border-gray-200 font-semibold py-4 px-4"
                >
                  {column.accessorKey === 'buyer' && (
                    <img
                      src={row[column.accessorKey]}
                      alt="Buyer"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  )}
                  {column.accessorKey !== 'buyer' && row[column.accessorKey]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

        </div>
    </div>
  )
}

export default ActiveOrder
