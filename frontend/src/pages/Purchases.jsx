import React, { useContext, useEffect, useRef, useState } from 'react'

import assets from '../assets/assets'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import axios from 'axios'

import { UserDataContext } from '../context/UserContext'
import PurchaseBillsRecods from '../components/Auth/Purchases/PurchaseBillsRecods'
import PurchaseFilter from '../components/Auth/Purchases/PurchaseFilter'
import SummaryCard from '../components/Auth/Common/SummaryCard'
import PurchaseManualEntry from '../components/Auth/Purchases/PurchaseManualEntry'
import PurchaseShopDetails from '../components/Auth/Purchases/PurchaseShopDetails'
import PurchaseShopBillsRecord from '../components/Auth/Purchases/PurchaseShopBillsRecord'
import PurchaseBill from '../components/Auth/Purchases/PurchaseBill'

// ---- Actions ----
// show filters sidebar
// show purchase bills panel
// show new bill entry panel when click on manual entry

const Purchases = () => {
  const [isManualEntryPanelOpen, setIsManualEntryPanelOpen] = useState(false)
  const [isBillsPanelOpen, setIsBillsPanelOpen] = useState(true)
  const [isShopBillsPanelOpen, setIsShopBillsPanelOpen] = useState(false)
  const [isBillOpen, setIsBillOpen] = useState(false)
  const [isSideMenu, setIsSideMenuOpen] = useState(false)
  const [shopsBills, setshopsBills] = useState([])
  const [selectedShop, setSelectedShop] = useState('')
  const [selectedBill, setSelectedBill] = useState('')
  const [renderShopBills, setRenderShopBills] = useState([])

  const { currency } = useContext(UserDataContext)
  const SideMenuRef = useRef()

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/get-purchase-bills`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then(res => {
      // console.log(res)
      setshopsBills(res.data.purchaseBills)
    }).catch(err => {
      console.error("Error fetching purcahse bills:", err)
    })
  }, [])




  useGSAP(() => {

    if (isSideMenu) {
      gsap.to(SideMenuRef.current, {
        duration: 0.5,
        x: '0',
        opacity: 1,
      })
    } else {
      gsap.to(SideMenuRef.current, {
        duration: 0.5,
        x: '-100%',
        opacity: 0,
      })
    }
  }, [isSideMenu])

  // ---- Sidebar filter visibility on md screen size
  useGSAP(() => {
    let mm = gsap.matchMedia()
    mm.add("(min-width: 768px)", () => {
      gsap.to(SideMenuRef.current, {
        duration: 0.5,
        x: '0',
        opacity: 1,
      })
    })

    mm.add("(max-width: 768px)", () => {
      gsap.to(SideMenuRef.current, {
        duration: 0.5,
        x: '-100%',
        opacity: 1,
      })
    })
  }, [])


  // console.log(isSideMenu)


  return (
    <div className='mt-4'>
      <h2 className='font-medium text-primary text-xl w-fit flex gap-3'>
        Purchases
        <img src={assets.FilterIcon} alt="filter-icon" className='w-6 md:hidden' onClick={() => setIsSideMenuOpen(prev => !prev)} />
      </h2>

      <div className={`grid grid-cols-4 gap-1 md:gap-3 mt-4 relative`}>

        {/* side menu */}
        <div ref={SideMenuRef} className={`z-10 transition-all translate-x-0 opacity-1 duration-100 rounded-e-md md:rounded-md bg-white/70 md:bg-transparent backdrop-blur-sm md:col-span-1 absolute md:static left-0 min-h-screen overflow-y-scroll px-5 md:px-2 lg:px-5`}>

          {/* Close Icon */}
          {/* <CloseIcon /> */}
          <div className="w-full flex justify-end mb-3 md:hidden cursor-pointer">
            <img src={assets.CloseIcon} alt="" className='w-10 right-5' onClick={() => setIsSideMenuOpen(false)} />
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
              <img src={assets.BillIcon} alt="bill-icon" className='' />
            </div>

            <span className='lg:text-lg md:leading-tight font-medium'>Manual Entry</span>
          </div>

          {/* Purchase Bills button */}
          <div
            onClick={() => {
              setIsManualEntryPanelOpen(false)
              setIsShopBillsPanelOpen(false)
              setIsBillsPanelOpen(true)
            }}
            className="relative mt-3 flex gap-3 items-center cursor-pointer bg-white w-full h-fit px-6 md:px-4 lg-px-6 py-3 rounded-lg">

            {/* side design */}
            <div className="absolute rounded-e-lg w-3 h-8 lg:h-9 max-h-[80%] bg-primary top-auto bottom-auto left-0"></div>
            {/* ----------- */}

            <div className="w-8 lg:w-9 h-8 lg:h-9 rounded-lg bg-primary p-2 text-white">
              <img src={assets.BillIcon} alt="bill-icon" className='' />
            </div>

            <span className='lg:text-lg md:leading-tight font-medium'>Purchase Records</span>
          </div>

          {isBillsPanelOpen && (
            <>
              {/* Purchase range and date filter */}
              {/* < PurchaseFilter currency={currency}
                /> */}


              {/* Shop Card */}
              <SummaryCard icon={assets.CartIcon} title={"Shops"} value={shopsBills.length} />
            </>
          )}

          {isManualEntryPanelOpen && (
            <>
              <PurchaseShopDetails />
            </>
          )}

          {isShopBillsPanelOpen && (
            <>
              {/* Purchase range and date filter */}
              < PurchaseFilter
                renderShopBills={renderShopBills}
                setRenderShopBills={setRenderShopBills}
                currency={currency}
                selectedShop={selectedShop}
              />


              {/* Shop Card */}
              <SummaryCard icon={assets.CartIcon} title={"Order Placed"} value={selectedShop.purchaseBills.length} />
            </>
          )}
        </div>

        {isBillsPanelOpen && (
          <PurchaseBillsRecods
            shopsBills={shopsBills}
            setSelectedShop={setSelectedShop}
            setRenderShopBills={setRenderShopBills}
            setIsShopBillsPanelOpen={setIsShopBillsPanelOpen}
            setIsBillsPanelOpen={setIsBillsPanelOpen}
            isBillsPanelOpen={isBillsPanelOpen} />
        )}

        {isManualEntryPanelOpen && (
          <>
            <PurchaseManualEntry currency={currency} />
          </>
        )}

        {isShopBillsPanelOpen && (
          <PurchaseShopBillsRecord
            currency={currency}
            setSelectedBill={setSelectedBill}
            renderShopBills={renderShopBills}
            setIsBillOpen={setIsBillOpen}
            selectedShop={selectedShop}
            setIsBillsPanelOpen={setIsBillsPanelOpen}
            isShopBillsPanelOpen={isShopBillsPanelOpen}
            setIsShopBillsPanelOpen={setIsShopBillsPanelOpen} />
        )}

        {isBillOpen && (
          <PurchaseBill
            currency={currency}
            setIsBillOpen={setIsBillOpen}
            selectedShop={selectedShop}
            setIsShopBillsPanelOpen={setIsShopBillsPanelOpen}
            setIsBillsPanelOpen={setIsBillsPanelOpen}
            selectedBill={selectedBill} />
        )}

      </div>
    </div >
  )
}

export default Purchases