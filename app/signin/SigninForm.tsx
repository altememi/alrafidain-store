'use client'

import Link from "next/link";
import Logo from "../com/ui/Logo";
import Button from "../com/ui/Button";
import Heading from "../com/ui/Heading";
import { signIn } from "next-auth/react";
import { SafeUser } from "@/types/Index";
import Input from "../com/ui/inputs/Input";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CircularProgress from "@mui/material/CircularProgress";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface SigninFormProps {
    currentUser: SafeUser | null;
}

const SigninForm: React.FC<SigninFormProps> = ({ currentUser }) => {

    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: { email: "", password: "" }
    });

    const router = useRouter();

    useEffect(() => {
        if (currentUser) {
            router.push('/');
            router.refresh();
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        signIn('credentials', { ...data, redirect: false })
            .then((callback) => {
                setIsLoading(false);
                if (callback?.ok) {
                    toast.success('You are successfully logged in.', {
                        style: { padding: '16px', color: '#000000' },
                        iconTheme: { primary: '#008000', secondary: '#ffffff' }
                    });
                    router.push('/');
                    router.refresh();
                }
                if (callback?.error)
                    toast.error(callback.error, {
                        style: { padding: '16px', color: '#000000' },
                        iconTheme: { primary: '#ff0000', secondary: '#ffffff' },
                    });
            });
    }

    // redirect to home : current user
    if (currentUser) {
        return <div>
            <Logo src={"/vector-process.svg"} alt={""} />
            <p className="text-center font-semibold">You are logged in, redirected to ...</p>
        </div>
    }

    return (
        <>
            <Logo src={'/logo-ruc.png'} alt={"logo"} />
            <Heading title={"Sign up for Rafidain Shop"} />
            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required />
            <Input
                min={5}
                type="password"
                id="password"
                label="Password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required />

            <Button label={isLoading ? <CircularProgress color="warning" size={15} /> : 'Sign up'} onClick={handleSubmit(onSubmit)} />

            <p className="text-sm">
                Do not have an account? {" "}
                <Link href={'/signup'} className="underline font-semibold">
                    Register
                </Link>
            </p>
        </>
    );
}

export default SigninForm;