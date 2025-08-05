'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useSigninMutation } from '@/apis/auth';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';
import toast from 'react-hot-toast';



export const SigninForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const signinMutation = useSigninMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signinMutation.mutateAsync({ emailOrPhone: email, password });
      toast.success('Login successful');
      const redirectTo = "/";
      router.push(redirectTo);
    } catch (error: any) {
      toast.error("something went wrong with")
    }
  };

  // if (isLoggedIn) return null;

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="m@example.com"
          required
        />
      </div>

      <div className="space-y-2 relative">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute top-8 right-3 text-gray-500 hover:text-gray-700"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      <Button type="submit" className="w-full cursor-pointer" disabled={signinMutation.isPending}>
        {signinMutation.isPending ? 'Signing in...' : 'Sign in'}
      </Button>

      {signinMutation.isError && (
        <p className="text-red-500 text-sm">
          {(signinMutation.error as any)?.response?.data?.message || 'Login failed'}
        </p>
      )}
    </form>
  );
};
