const MenuWrap = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="
        bg-white
            min-h-fit
            h-full
            flex
            items-center
            justify-center
            pb-10
            pt-20">
            <div className="
                max-w-[650px]
                w-full
                flex
                flex-col
                gap-6
                items-center
                shadow-sm
                shadow-slate-400
                rounded-md
                p-4
                md-p-8">
                {children}
            </div>
        </div>
    );
}

export default MenuWrap;