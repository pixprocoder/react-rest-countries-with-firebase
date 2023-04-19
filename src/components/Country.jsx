import React from 'react';

const Country = ({country}) => {
    const {name, flags, region , population, currencies } = country

    let currencyName = null
    let currencySymbol = null
    let currencyArray = []
    if(currencies){
        const entries = Object.entries(currencies)
        currencyArray  = entries
    }
    if(currencyArray[0]){
        currencyName = currencyArray[0][1].name;
        currencySymbol = currencyArray[0][1].symbol;
    }
    console.log(currencies);

    return (
        <div className='bg-sky-300 flex flex-col   border justify-between  rounded-md'>
             <div className='w-[100%]'>
             <img className='w-[100%] rounded-md' src={flags.svg} alt="" /> 
             </div>
            <div className='ml-2'>
            <h1 className="text-xl">{name.common}</h1>
            <p className="text-sm">Region: {region}</p>
            <p className="text-sm">Population: {population}</p>
            <div className="bg-sky-400 p-2   rounded-sm w-full">
                <h1 className=" text-xl">Currency Info:</h1>
                <p className="text-sm">{currencyName}</p>
                <p className="text-sm text-blue-950 font-black">{currencySymbol}</p>
            </div>
            <button className='mt-5  bg-yellow-100 hover:bg-yellow-300  py-2 px-4 rounded-lg font-bold'>Details</button>
            </div>
        </div>
    );
};

export default Country;