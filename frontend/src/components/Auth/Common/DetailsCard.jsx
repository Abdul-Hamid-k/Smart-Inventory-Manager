import React from 'react'

const DetailsCard = (props) => {
  return (
    <div className="relative mt-4 flex flex-col gap-2 bg-white w-full h-fit px-6 md:px-4 lg-px-6 py-3 rounded-lg">

      {/* side design */}
      <div className="absolute rounded-e-lg w-3 h-8 lg:h-9 max-h-[80%] bg-primary top-auto bottom-auto left-0"></div>
      {/* ----------- */}
      <h3 className='md:leading-tight font-medium text-lg my-1.5 text-primary'>{props.cardTitle}</h3>

      {props.details.map((detail, index) => (
        <div key={index} className="flex flex-col gap-1">
          <h4 className='md:leading-tight font-medium text-primary'>{detail.title}</h4>
          <h5 className=''>{detail.value}</h5>
        </div>
      ))}


    </div>
  )
}

export default DetailsCard