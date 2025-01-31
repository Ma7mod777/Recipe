import React from 'react'


export default function Footer() {
  return (<>
      <div className="text-gray-950 z-50 relative ">
        <div className="max-w-2xl mx-auto py-10">
            <div className="text-center ">
                <h3 className="text-3xl mb-3"> Download Our Fitness App </h3>
                <p> Stay fit. All day, every day. </p>
                <div className="flex justify-center mt-5">
                    <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2 ">
                        <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-7 md:w-8"/>
                        <div className="text-left ml-3">
                            <p className='text-xs'>Download on </p>
                            <p className="text-sm md:text-base"> Google Play Store </p>
                        </div>
                    </div>
                    <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">
                        <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-7 md:w-8"/>
                        <div className="text-left ml-3">
                            <p className='text-xs'>Download on </p>
                            <p className="text-sm md:text-base"> Apple Store </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
  </>
  )
}
