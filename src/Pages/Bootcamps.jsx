function Bootcamps() {
    return (
      <div className='p-10'>
        <h1 className='text-2xl font-bold text-center'>Available Bootcamps</h1>
        <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='border rounded p-5'>
            <h2 className='text-xl font-semibold'>JavaScript Bootcamp</h2>
            <p className='mt-2'>Learn JavaScript from scratch and become a web developer in 12 weeks!</p>
          </div>
          <div className='border rounded p-5'>
            <h2 className='text-xl font-semibold'>React Bootcamp</h2>
            <p className='mt-2'>Master React and build dynamic web applications.</p>
          </div>
          <div className='border rounded p-5'>
            <h2 className='text-xl font-semibold'>Node.js Bootcamp</h2>
            <p className='mt-2'>Learn backend development with Node.js and Express.</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Bootcamps;