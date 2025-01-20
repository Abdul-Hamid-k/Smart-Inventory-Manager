import React, { useContext, useRef, useState } from 'react'

import { BillIcon, CartIcon, CloseIcon, FilterIcon, RefreshIcon } from '../assets/assets'


import { UserDataContext } from '../context/UserContext'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import PurchaseBillsRecods from '../components/Auth/Purchases/PurchaseBillsRecods'
import PurchaseFilter from '../components/Auth/Purchases/PurchaseFilter'

// ---- Actions ----
// show filters sidebar
// show purchase bills panel
// show new bill entry panel when click on manual entry

const Purchases = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(true)
  const [isManualEntryPanelOpen, setIsManualEntryPanelOpen] = useState(false)
  const [isBillsPanelOpen, setIsBillsPanelOpen] = useState(true)

  const [minRange, setMinRange] = useState('')
  const [maxRange, setMaxRange] = useState('')
  const [dateRangeStart, setDateRangeStart] = useState('')
  const [dateRangeEnd, setDateRangeEnd] = useState('')


  const { currency } = useContext(UserDataContext)
  const filterRef = useRef()


  useGSAP(() => {

    if (isFiltersOpen) {
      gsap.to(filterRef.current, {
        duration: 0.5,
        x: '0',
        opacity: 1,
      })
    } else {
      gsap.to(filterRef.current, {
        duration: 0.5,
        x: '-100%',
        opacity: 0,
      })
    }
  }, [isFiltersOpen])


  console.log(isFiltersOpen)

  const applyFilterHandler = (e) => {
    e.preventDefault()
    {/* TODO: filter handler */ }
  }


  // !!TODO: Sidebar filter visibility on md screen size

  return (
    <div className='mt-4'>
      <h2 className='font-medium text-primary text-xl w-fit flex gap-3'>
        Purchases
        <img src={FilterIcon} alt="filter-icon" className='w-6 md:hidden' onClick={() => setIsFiltersOpen(prev => !prev)} />
      </h2>

      <div className={`grid grid-cols-4 gap-1 md:gap-3 mt-4 relative`}>

        {/* TODO: Seperate Component */}
        {/* Filter */}
        <div ref={filterRef} className={` transition-all translate-x-0 opacity-1 duration-100 rounded-e-md md:rounded-md bg-base/10 md:bg-base/50 backdrop-blur-sm md:col-span-1 absolute md:static left-0 min-h-screen overflow-y-scroll px-5 md:px-2 lg:px-5 py-3`}>

          {/* Close Icon */}
          {/* <CloseIcon /> */}
          <div className="w-full flex justify-end mb-3 md:hidden cursor-pointer">
            <img src={CloseIcon} alt="" className='w-10 right-5' onClick={() => setIsFiltersOpen(false)} />
          </div>

          {/* Manual Entry button */}
          <div
            onClick={() => {
              setIsManualEntryPanelOpen(true)
              setIsBillsPanelOpen(false)
            }}
            className="relative flex gap-3 items-center cursor-pointer bg-white w-full h-fit px-6 md:px-4 lg-px-6 py-3 rounded-lg">

            {/* side design */}
            <div className="absolute rounded-e-lg w-3 h-8 lg:h-9 max-h-[80%] bg-primary top-auto bottom-auto left-0"></div>
            {/* ----------- */}

            <div className="w-8 lg:w-9 h-8 lg:h-9 rounded-lg bg-primary p-2 text-white">
              <img src={BillIcon} alt="bill-icon" className='' />
            </div>

            <span className='lg:text-lg md:leading-tight font-medium'>Manual Entry</span>
          </div>

          {/* Purchase range and date filter */}
          <div className="relative cursor-pointer bg-white w-full h-fit mt-4 px-6 md:px-4 lg-px-6 py-3 rounded-lg">
            {/* side design */}
            <div className="absolute rounded-e-lg w-3 h-8 lg:h-9 max-h-[80%] bg-primary top-auto bottom-auto left-0"></div>
            {/* ----------- */}


            <div className="flex justify-between">
              <p className=' font-medium text-primary'>Filters</p>
              <img
                src={RefreshIcon}
                alt="refresh-icon"
                className='w-6 fill-primary'
              />
            </div>

            <form
              onSubmit={(e) => applyFilterHandler(e)}
              className='mt-2 flex flex-col gap-2'>


              <p className='mt-3 text-sm md:leading-tight font-medium text-primary'>Price Range</p>
              {/* min-range */}
              <div className="border-[0.1rem] text-sm md:text-base md:text-black rounded-md focus-within:border-primary outline-none w-full px-2 py-1 flex gap-1 pointer-events-none">
                <span>{currency}</span>
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
                <span>{currency}</span>
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


          {/* Order Placed Card */}
          <div className="relative mt-4 flex flex-col gap-1  cursor-pointer bg-white w-full h-fit px-6 md:px-4 lg-px-6 py-3 rounded-lg">

            {/* side design */}
            <div className="absolute rounded-e-lg w-3 h-8 lg:h-9 max-h-[80%] bg-primary top-auto bottom-auto left-0"></div>
            {/* ----------- */}

            <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-lg bg-primary p-2 text-white">
              <img src={CartIcon} alt="bill-icon" className='fill-white' />
            </div>

            <h4 className='md:leading-tight font-medium text-primary'>Orders Placed</h4>
            {/* TODO */}
            <h5 className='font-medium text-2xl '>25</h5>
          </div>

        </div>


        <PurchaseBillsRecods
          currency={currency}
          isBillsPanelOpen={isBillsPanelOpen} />

        {isManualEntryPanelOpen && (
          <div className="h-screen bg-base/50 col-span-4 md:col-span-3">
            {/* TODO */}
          </div>
        )}

      </div>
    </div >
  )
}

export default Purchases