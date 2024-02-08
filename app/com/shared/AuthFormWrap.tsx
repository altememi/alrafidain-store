const AuthFormWarp = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="
            min-h-fit
            relative
            h-full
            flex
            items-center
            justify-center
            py-1">
            <div className="
                absolute
                top-1/4
                transform translate-y-1/4
                max-w-[650px]
                w-full
                flex
                flex-col
                gap-3
                items-center
                shadow-sm
                shadow-slate-300
                rounded-md
                p-4 border-2 border-slate-100
                md-p-8">
                {children}
            </div>
        </div>
    );
}

export default AuthFormWarp;