import { IconType } from "react-icons";

interface DashboardNavbarItemsProps {
    selected?: boolean,
    icon: IconType,
    label: string
}
const DashboardNavbarItems: React.FC<DashboardNavbarItemsProps> = ({selected, icon: Icon, label}) => {
    return ( 
        <section className={`flex items-center justify-center text-center gap-2 p-2 md:w-[10rem] xs:w-[3rem]
                    border-2 rounded-lg hover:bg-sky-800 hover:text-white transition cursor-pointer
                    ${selected ? 'bg-sky-800 text-white' : 'bg-gray-100 text-slate-600'}`}>
                        <Icon size={20}/>
                        <div className="md:block xs:hidden font-medium text-sm text-center breack-normal">
                            {label}
                        </div>

        </section>
     );
}
 
export default DashboardNavbarItems;