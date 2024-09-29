import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

  return (
    <div className='bg-[rgba(234,210,238,0.68)] my-20 mx-10 p-5'>
      <div className='flex flex-col items-center'>
        <h1 className='p-5 font-bold text-2xl'>Sign Up</h1>
        <label htmlFor="name">Enter Your Name:</label>
        <input className='border w-72 p-2 mb-4' type="text" id="name" />
        
        <label htmlFor="email">Enter Your Email:</label>
        <input className='border w-72 p-2 mb-4' type="email" id="email" />

        <label htmlFor="password">Enter Your Password:</label>
        <input className='border w-72 p-2 mb-4' type="password" id="password" />

        <button className='bg-purple-600 text-white rounded p-2' onClick={() => { navigate('/bootcamps') }}>Sign Up!</button>
      </div>
    </div>
  );
}

export default SignUp;
