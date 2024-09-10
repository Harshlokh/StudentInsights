import React from 'react'

const Aboutus = () => {
  return (
    <div id="aboutus-section"> 
         <div className='flex flex-wrap justify-center relative gap-20 mt-20'>
    <div className='flex flex-wrap relative h-[25rem] w-[30rem]  rounded-3xl' >
     <h1 className='responsive-heading'>About us</h1>
     <p className='paragraph'>Student Insight is a review platform that's open to <br/>
         everyone.Share your experiences to help others make better 
         choices and encourage them for studying in best Universities. 
     </p>
     <button className='btn3 flex relative justify-center ml-5'>What we do</button>
   </div>
       <div className='flex flex-wrap relative text-center bg-gradient-to-r from-slate-500 to-slate-800 h-[35rem] w-[30rem]  border-2px stroke-lime-100 rounded-3xl shadowfrombehind '>
             <h1 className='fit-container'>Our 2024 Transparency Reports has  landed </h1>
             <p className='paragraph'>We're looking back on a year unlike any other.Read about how we ensure our platform's integrity.</p>
             <button className='btn3 ml-5'>Take a look</button>
       </div>
   </div>
    <div>
    </div>
     <div className=''> 
         <div className="curved-line">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 100" /* Adjust the viewBox size as needed */
  >
    <path
      fill="none" /* No fill color */
      stroke="#08e792e8" /* Color of the curve */
      strokeWidth="0.5" /* Thickness of the line */
      d="M10,50 C60,10 140,10 190,50" /* Define the curve using a cubic Bezier curve */
    ></path>
  </svg>
</div>  <div className='allignmentclass'>
        <h1 className='responsive-heading'>What we do</h1>
        <div className='flex flex-wrap relative  justify-center gap-[3rem] '>
             <div className='fortext h-[17rem] justify-center w-[47rem] bg-gradient-to-r from-slate-500 to-slate-800 rounded-3xl shadowfrombehind  '>
                  <p className='weirdpara'>Student Insight also reviews the opinions that other students have reported so that any spam or 
                    any sort of data that may violate the policies stated must be taken down.Ensure a healthy environment where students can know the truth 
                    about their precious uni is what we aim for.
                  </p>
             </div>
             <div className='forimg '>
                  <img src='Images/logo.png' height={250} width={200} className='rounded-[50%]'/>
             </div>
        </div>
        </div>
     </div>
   </div>
  )
}

export default Aboutus