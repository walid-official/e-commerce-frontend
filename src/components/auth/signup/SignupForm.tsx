'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useSignupMutation } from '@/apis/auth';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';

interface SignupFormData {
  name: string;
  phone: string;
  email: string;
  password: string;
  [key: string]: string;
}

interface ApiError {
  response?: {
    data?: {
      message?: string;
      error?: string;
    };
  };
  message: string;
}

export const SignupForm = () => {
  const signupMutation = useSignupMutation();
  const router = useRouter();

  const [form, setForm] = useState<SignupFormData>({
    name: '',
    phone: '',
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signupMutation.mutate(form, {
      onSuccess: () => router.push('/'),
    });
  };

  const error = signupMutation.error as ApiError | null;

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={form.name}
          onChange={handleChange}
          placeholder="John Doe"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="0123456788"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="m@example.com"
          required
        />
      </div>

      <div className="space-y-2 relative">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type={showPassword ? 'text' : 'password'}
          value={form.password}
          onChange={handleChange}
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute top-9 right-3 text-gray-500 hover:text-gray-700"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      <Button
        type="submit"
        className="w-full cursor-pointer"
        disabled={signupMutation.isPending}
      >
        {signupMutation.isPending ? 'Signing up...' : 'Sign Up'}
      </Button>

      {signupMutation.isError && (
        <p className="text-red-500 text-sm">
          {error?.response?.data?.message || error?.message || 'Signup failed'}
        </p>
      )}
    </form>
  );
};
