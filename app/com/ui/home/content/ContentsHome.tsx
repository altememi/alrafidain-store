import { MdHeadphones, MdPrivacyTip, MdSecurity, MdTimeline } from "react-icons/md";

const ContentsHome = () => {
    return (
        <div className="h-auto">
            {/* cards NO 3 */}
            <div className="grid md:grid-cols-4 xs:grid-cols-1 gap-20 xs:gap-5 p-5 min-h-[20rem] max-h-auto text-slate-700 my-5">

                <div className="min-h-[10rem] max-h-[10rem]">
                    <div className="border-[.5px] rounded-md p-5 shadow-md text-justify">
                        <span className="text-[3rem] flex justify-center"><MdHeadphones /></span>
                        <h4 className="text-center text-lg font-semibold my-5">7/24 Support</h4>
                        <p>Al-Rafidain Shop website provides many services, including support, and one of our goals is to satisfy our customers</p>
                    </div>
                </div>

                <div className="min-h-[10rem] max-h-[10rem]">
                    <div className=" border-[.5px] rounded-md p-5 shadow-md text-justify">
                        <span className="text-[3rem] flex justify-center"><MdSecurity /></span>
                        <h4 className="text-center text-lg font-semibold my-5">Security</h4>
                        <p>Al-Rafidain Shop website offers many services, including the priority protection for users, which is protecting customer information and providing an integrated system for buying and selling.</p>
                    </div>
                </div>

                <div className="min-h-[10rem] max-h-[10rem]">
                    <div className=" border-[.5px] rounded-md p-5 shadow-md text-justify">
                        <span className="text-[3rem] flex justify-center"><MdPrivacyTip /></span>
                        <h4 className="text-center text-lg font-semibold my-5">Privacy</h4>
                        <p>Al-Rafidain Shop website offers many services, including privacy, meaning providing special features for users and making them available only,
                            meaning preventing others from accessing them and adding the ability to modify them.</p>
                    </div>
                </div>

                <div className="min-h-[10rem] max-h-[10rem]">
                    <div className=" border-[.5px] rounded-md p-5 shadow-md text-justify">
                        <span className="text-[3rem] flex justify-center"><MdTimeline /></span>
                        <h4 className="text-center text-lg font-semibold my-5">Experience</h4>
                        <p>
                            The team in charge of Al-Rafidain Shop website has more than 10 years of experience in e-commerce sites, and we have teams specialized in information protection and site development.
                            We have warehouses to store goods for customers requesting them within a limited period.
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ContentsHome;