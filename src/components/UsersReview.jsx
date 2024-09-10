import React from 'react'

const UsersReview = () => {
  return (
    <div className='mt-20'>
        <div className='line'></div>
         <h1 className='responsive-heading '>What do our users say ?</h1>
         <div className='line'></div>

        <div className='flex flex-wrap relative justify-center'>
        <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
	<img src="Images/stud4.jpg" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500  " />
	<div className="mt-6 mb-2">
		<span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600"></span>
		<h2 className="text-xl font-semibold tracking-wide">Harsh Lokhande</h2>
	</div>
	<p className="dark:text-gray-800">Was about to take admission in a uni but found that it was not as expected student Insight saved my time.</p>
    </div>
    <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
	<img src="Images/stud5.jpg" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
	<div className="mt-6 mb-2">
		<span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600"></span>
		<h2 className="text-xl font-semibold tracking-wide">Rose Galler</h2>
	</div>
	<p className="dark:text-gray-800">Got a reality check on the campus and the teachers attitude towards the students .</p>
    </div>
    <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
	<img src="Images/stud3.jpg" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
	<div className="mt-6 mb-2">
		<h2 className="text-xl font-semibold tracking-wide">Ted Mosby</h2>
	</div>
	<p className="dark:text-gray-800">Excellent experiance ,everyone should try out Student Insight.</p>
    </div>
    
        </div>
    </div>
  )
}

export default UsersReview