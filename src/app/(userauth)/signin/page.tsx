
// import AuthForm from '@/app/components/AuthForm';
import { AuthForm } from '@/components/auth';
import React from 'react';

const SignInPage: React.FC = () => {
  return (
    <div className=''>
        <AuthForm  isLogin={true} />
    </div>
  ) 
    
};

export default SignInPage;
