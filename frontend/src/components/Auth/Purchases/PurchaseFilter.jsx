import React, { useState } from 'react'
import assets from '../../../assets/assets'

const PurchaseFilter = (props) => {
  // props => currency, applyFilterHandler

  const [minRange, setMinRange] = useState('')
  const [maxRange, setMaxRange] = useState('')
  const [dateRangeStart, setDateRangeStart] = useState('')
  const [dateRangeEnd, setDateRangeEnd] = useState('')


  return (
    <>
      {/* Filter */}

      {/* Purchase range and date filter */}
      <div className="relative cursor-pointer bg-white w-full h-fit mt-4 px-6 md:px-4 lg-px-6 py-3 rounded-lg">
        {/* side design */}
        <div className="absolute rounded-e-lg w-3 h-8 lg:h-9 max-h-[80%] bg-primary top-auto bottom-auto left-0"></div>
        {/* ----------- */}


        <div className="flex justify-between">
          <p className=' font-medium text-primary'>Filters</p>
          <img
            src={assets.RefreshIcon}
            alt="refresh-icon"
            className='w-6 fill-primary'
          />
        </div>

        <form
          onSubmit={(e) => props.applyFilterHandler(e)}
          className='mt-2 flex flex-col gap-2'>


          <p className='mt-3 text-sm md:leading-tight font-medium text-primary'>Price Range</p>
          {/* min-range */}
          <div className="border-[0.1rem] text-sm md:text-base md:text-black rounded-md focus-within:border-primary outline-none w-full px-2 py-1 flex gap-1 pointer-events-none">
            <span>{props.currency}</span>
            <input
              type="number"
              name='min-range'
              placeholder='Min Amount'
              min={0}
              value={minRange}
              onChange={(e) => setMinRange(e.target.value)}
              className='w-full  outline-none pointer-events-auto' />
          </div>

          {/* max-range */}
          <div className="border-[0.1rem] text-sm md:text-base md:text-black  rounded-md focus-within:border-primary outline-none w-full px-2 py-1 flex gap-1 pointer-events-none">
            <span>{props.currency}</span>
            <input
              type="number"
              name='min-range'
              placeholder='Max Amount'
              min={Number(minRange) + 10}
              value={maxRange}
              onChange={(e) => setMaxRange(e.target.value)}
              className='w-full outline-none pointer-events-auto' />
          </div>

          <p className='mt-2 text-sm md:leading-tight font-medium text-primary'>Date Range</p>
          {/* Date-start */}
          <div className="border-[0.1rem] rounded-md text-sm md:text-base md:text-black  focus-within:border-primary outline-none w-full px-2 py-1 flex gap-1 pointer-events-none">
            <input
              type="date"
              name='dateStart'
              value={dateRangeStart}
              onChange={(e) => setDateRangeStart(e.target.value)}
              className='w-full  outline-none pointer-events-auto' />
          </div>

          {/* Date-end */}
          <div className="border-[0.1rem] rounded-md text-sm md:text-base md:text-black  focus-within:border-primary outline-none w-full px-2 py-1 flex gap-1 pointer-events-none">
            <input
              type="date"
              name='dateEnd'
              value={dateRangeEnd}
              onChange={(e) => setDateRangeEnd(e.target.value)}
              className='w-full  outline-none pointer-events-auto' />
          </div>

          <button
            className='w-full px-4 py-1 flex justify-center items-center bg-primary text-white rounded-md font-medium'>Apply Filter</button>

        </form>
      </div>

    </>
  )
}

export default PurchaseFilter