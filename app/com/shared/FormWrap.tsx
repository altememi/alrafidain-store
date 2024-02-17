const FormWarp = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="
            min-h-fit
            h-full
            flex
            items-center
            justify-center
            py-1">
            <div className="
                max-w-[650px]
                w-full
                flex
                flex-col
                gap-3
                items-center
                shadow-slate-200
                p-4 border-b-[.5px]
                md-p-8">
                {children}
            </div>
        </div>
    );
}

export default FormWarp;