import React from 'react'

const ExxCompo = () => {
  return (
    <div>
         <div className='mt-[10rem]'>
      <h1 className='responsive-heading'>Get Started</h1>

      <div className='flex flex-wrap relative justify-center gap-11'>
      <Link to="/add">
        <button className='btn5'>Add New Page</button>
      </Link>
      {!isAdmin && (
        <Link to="/admin">
          <button className='btn5'>Admin Login</button>
        </Link>
      )}
      </div>
      <div className='mt-20'>
        <h1 className='responsive-miniheading '>Search Name </h1>   
           <div className='flex relative flex-wrap justify-center'>
           <input
        className='searchbox'
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>
       </div>

      <div className="pages-list">
        {filteredPages.map((page, index) => (
          <div key={index} className="page-item">
            <h2 className='titleforcompany'>{page.title}</h2>
            <p className='usernamewhoaddscontent '>Added by: {page.user}</p>
            <div className="page-content">{page.content}</div>
            {isAdmin && (
              <button className='btn2' onClick={() => deletePage(index)}>Delete</button>
            )}
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default ExxCompo