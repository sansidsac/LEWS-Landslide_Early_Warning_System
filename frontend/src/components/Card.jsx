import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({title="cksmcks",link="/regions",description="fhvjfvjdfvbjd",imageUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"}) => {
  return (
    <div>
        <div className="flex flex-col rounded-2xl w-96 bg-[#fad4d4] shadow-xl">
    <figure className="flex justify-center items-center rounded-2xl">
        <img src={imageUrl} alt="Card Preview" className="rounded-t-2xl"/>
    </figure>
    <div className="flex flex-col p-8">
        <div className="text-2xl font-bold   text-[#273855] pb-6">{title}</div>
        <div className=" text-lg   text-[#374151]">{description}</div>
        <div className="flex justify-end pt-6">
            <Link to={link}> 
            <button className="bg-[#f14d4d] text-[#ffffff]  font-bold text-base  p-3 rounded-lg hover:bg-red-700 active:scale-95 transition-transform transform">Check &rarr;</button>
            </Link>
        </div>
    </div>
</div>
    </div>
  )
}

export default Card