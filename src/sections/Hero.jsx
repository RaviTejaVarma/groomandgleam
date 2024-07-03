import React from "react";
import '../App.css';

export const Hero = () => {
    return (
        <><div className='pl-28 pt-40'>
            <div>
                <h1 className="font-causten text-7xl font-semibold leading-tighter  text-left tracking-wide">Unleash  your</h1>
                <h1 className="font-causten text-7xl font-semibold leading-tighter text-left tracking-wide">pets  beauty.</h1>
            </div>

            <div>
                <h4 className=" pt-3 pb-3 text-neutral-500 font-causten text-xl tracking-wide"> Home  pet  grooming  services  @Hyderabad </h4>
            </div>

            <div className='flex-none space-x-3'>
                <button className="font-causten text-base text-white  text-left bg-orange-400 px-5 py-2 rounded-3xl">Book now</button>
                <button className="font-causten text-baseborder-solid border-2 border-orange-400 text-orange-400 rounded-3xl font-bold px-4 py-2">Subscribe</button>
            </div>
        </div>
        <div className="absolute" style={{ width: '495px', height: '403px', top: '179px', left: '690px', gap: '0px', opacity: '1' }}>
        <img src="/dog-grooming-puppy-pet-dog-daycare-labrador-retriever-towel-d7bfb71894e04b4a0c698419fd83937c 1.png" alt="Dog grooming" className="w-full h-full object-cover" />
      </div>
      <div className="absolute" style={{ width: '128.33px', height: '128px', top: '187px', left: '1100.97px', gap: '0px', opacity: '1' }}>
                    <img src="/Group 10.png" alt="Your Pet First Service" className="w-full h-full object-cover" />
      </div>
      <div className="absolute" style={{ width: '250.72px', height: '265px', top: '187px', left: '490px', gap: '0px', opacity: '1' }}>
                    <img src="\soap-bubble-transparency-and-translucency-clip-art-bubble-8e02331195eccd2debd0f2e00a80d80d 1.png" alt="soap-bubble" className="w-full h-full object-cover" />
                </div>
            
        </>
    );

};

