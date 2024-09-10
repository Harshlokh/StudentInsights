import React from 'react';


function BackgroundSlideshow({ getStartedRef }) {
    const styles = {
       Image1: {
            height: '250px',
            width: '550px',
            borderRadius: '30px',
            display: 'flex',
            flexDirection: 'column',
            marginTop:'30px' 
    }
};

const handleClickNavigate = () => {
    if (getStartedRef.current) {
      getStartedRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
            <div>   
          <h1 className='responsive-heading'>Welcome to student Insight</h1>
          <div>
          </div>
           <button className='flex flex-wrap fixed bg-green-300 text-black font-bold w-[200px] rounded-3xl text-[15px] text-center'  onClick={handleClickNavigate} >Go TO ! mainsection !</button>
          <div className='flex flex-wrap relative justify-center gap-20 mt-[5rem]'>
            <div>
             <img style={styles.Image1} src='https://images.unsplash.com/photo-1604305834971-4ad6e1ba02e3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        </div>
        <div className='responsive-miniheading -mt-[60rem]'>
            <p className='mt-11 text-4xl text-[#f3eeee]'>"Your voice matters. Share your experiences <br/>
             and help build a transparent, informed <br/>
              campus community through honest student reviews."</p>
              <br/>
              <div className='flex flex-wrap relative justify-center gap-20'>
              <button className='btn3'  onClick={handleClickNavigate} >Start Know</button>
              <button className='btn3'><a href='#Contact'>Contact Us</a></button>
              </div>
        </div>

        </div>
     
        </div> 
    );
}

export default BackgroundSlideshow;
