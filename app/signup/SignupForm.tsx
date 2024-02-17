'use client'

import axios from "axios";
import Link from "next/link";
import Logo from "../com/ui/Logo";
import Button from "../com/ui/Button";
import Heading from "../com/ui/Heading";
import Input from "../com/ui/inputs/Input";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { signIn } from 'next-auth/react';
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const SignupForm = () => {

    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
        }
    });

    const router = useRouter();
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        axios.post('/api/register', data).then(() => {
            alert('Account Created Successfully');
            signIn('credentials', { email: data.email, password: data.password, redirect: false })
                .then((callback) => {
                    if (callback?.ok) {
                        router.push('/')
                        router.refresh()
                        toast.error('Yor are registered successfully', {
                            style: { padding: '16px', color: '#000000' },
                            iconTheme: { primary: '#008000', secondary: '#ffffff' },
                        });
                    }
                    if (callback?.error) toast.error(callback.error, {
                        style: { padding: '16px', color: '#000000' },
                        iconTheme: { primary: '#ff0000', secondary: '#ffffff' },
                    });
                })
                .catch(() => {
                    toast.error('Please, try again', {
                        style: { padding: '16px', color: '#000000' },
                        iconTheme: { primary: '#ff0000', secondary: '#ffffff' },
                    });
                })
                .finally(() => { setIsLoading(false); })
        });
    };

    return (
        <>
            <Logo src={"/logo-ruc.png"} alt={"logo"} />
            <Heading title={"Sign up for Rafidain Shop"} />
            <Input
                id="name"
                label="Name"
                disabled={isLoading}
                register={register}
                errors={errors}
                required />
            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required />
            <Input
                id="password"
                label="Password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required />

            <Button label={isLoading ? 'Loading' : 'Sign up'} onClick={handleSubmit(onSubmit)} />

            <p className="text-sm">
                Already have an account? {" "}
                <Link href={'/signin'} className="underline font-semibold">
                    Login
                </Link>
            </p>
        </>
    );
}

export default SignupForm;