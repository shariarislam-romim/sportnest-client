'use client';

import { Button, Input } from '@heroui/react';

import Link from 'next/link';

import { Mail, Lock, ArrowRight } from 'lucide-react';

import Image from 'next/image';
import Google from '../../images/google-logo.png'
import { signIn } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';


export default function Login() {
    const router = useRouter()
       const handleLogin = async(e)=>{
    
            e.preventDefault();
            const formData = new FormData(e.currentTarget)
            // console.log(formData)
    
            const loginData = Object.fromEntries(formData.entries());
            // console.log(loginData)
    
            const { data, error } = await signIn.email({
                ...loginData,
                // callbackURL:"/"
                
            })
    
            if(error){
                // console.log(error.message)
                toast.error("Login Failed");
                return;
            };
            router.push("/")
        }

    return (
        <div className="min-h-[80vh] flex flex-col bg-slate-50 py-10">
            <div className="flex items-center justify-center p-10">
                <div className="w-full max-w-md">
                    <div className="bg-green-200 p-8 rounded-[2.5rem] border border-slate-200 shadow-2xl space-y-8 relative overflow-hidden">
                        {/* Decorative element */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>

                        <div className="text-center space-y-2 relative">
                            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                                Welcome <span className="text-green-800">Back</span>
                            </h2>
                            <p className="text-slate-500 font-medium">Continue your booking  today</p>
                        </div>

                        <div className="space-y-4">
                            <Button
                                variant="bordered"
                                className="w-full h-12 font-bold rounded-2xl bg-green-300 border-slate-200 hover:bg-slate-50 transition-colors gap-3 inline-flex justify-center items-center"
                            >
                                <Image
                                    width={20}
                                    height={20}
                                    src={Google}
                                    className="w-5 h-5"
                                    alt="Google"
                                />
                                Sign in with Google
                            </Button>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-slate-100"></span>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className=" px-4 text-slate-500 font-bold tracking-widest">Or with email</span>
                            </div>
                        </div>

                        <form
                        onSubmit={handleLogin}
                            className="space-y-6"
                        >
                            <div className="space-y-2">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-bold text-slate-800 ml-1"
                                >
                                    Email Address
                                </label>
                                <Input
                                    id="email"
                                    required
                                    placeholder="Enter your email"
                                    type="email"
                                    name="email"
                                    startContent={<Mail className="w-5 h-5 text-slate-400" />}
                                    className="border-2 border-slate-200 hover:border-green-600/50 focus-within:border-green-800 transition-all duration-300 h-14 bg-white w-full rounded-xl p-2"
                                />
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="password"
                                    className="text-sm font-bold text-slate-800 ml-1"
                                >
                                    Password
                                </label>
                                <Input
                                    id="password"
                                    required
                                    placeholder="••••••••"
                                    type="password"
                                    name="password"
                                    startContent={<Lock className="w-5 h-5 text-slate-400" />}
                                    className="border-2 border-slate-200 hover:border-green-600/50 focus-within:border-green-800 transition-all duration-300 h-14 bg-white w-full rounded-xl p-2"
                                />
                            </div>
                            <div className="flex justify-end">
                                <Link
                                    href="#"
                                    className="text-sm font-bold text-green-700 hover:underline underline-offset-4 transition-all"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <Button
                                color="primary"
                                type="submit"
                                className="w-full h-14 text-lg font-black rounded-2xl shadow-xl shadow-blue-600/20 group inline-flex justify-center items-center bg-green-400"
                            >
                                Sign In <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </form>

                        <div className="text-center pt-2">
                            <p className="text-sm text-slate-500 font-medium">
                                New to SportNest?{' '}
                                <Link
                                    href="/register"
                                    className="text-green-700 font-black hover:underline underline-offset-4 transition-all"
                                >
                                    Create an account
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
