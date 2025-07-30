
import { AuthForm } from '@/components/auth';
import React from 'react';

const SignupPage: React.FC = () => {
  return (  
    <div className=''>
      
       <AuthForm isLogin={false} />
      
    </div>
  )
};

export default SignupPage;
