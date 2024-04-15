import { MdHeadphones, MdPrivacyTip, MdSecurity, MdTimeline } from "react-icons/md";

const ContentsHome = () => {
    return (
        <div className="h-auto">
            {/* cards NO 3 */}
            <div className="grid md:grid-cols-4 xs:grid-cols-1 gap-20 xs:gap-5 p-5 min-h-[20rem] max-h-auto text-slate-700 my-5">
                
                <div className=" border-[.5px] rounded-md p-5 shadow-md text-center">
                    <span className="text-[3rem] flex justify-center"><MdHeadphones /></span>
                    <h4 className="text-lg font-semibold my-5">7/24 Support</h4>
                    <p>There are many variations of passages of Lorem Ipsum available, 
                        but the majority have suffered alteration in some form, 
                        by injected humour, or randomised words which donot look even slightly believable. 
                        If you are going to use a passage of Lorem Ipsum, 
                        you need to be sure there isnot anything embarrassing hidden in the middle of text. 
                        All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, 
                        making this the first true generator on the Internet</p>
                </div>

                <div className=" border-[.5px] rounded-md p-5 shadow-md text-center">
                    <span className="text-[3rem] flex justify-center"><MdSecurity /></span>
                    <h4 className="text-lg font-semibold my-5">Security</h4>
                    <p>There are many variations of passages of Lorem Ipsum available, 
                        but the majority have suffered alteration in some form, 
                        by injected humour, or randomised words which donot look even slightly believable. 
                        If you are going to use a passage of Lorem Ipsum, 
                        you need to be sure there isnot anything embarrassing hidden in the middle of text. 
                        All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, 
                        making this the first true generator on the Internet</p>
                </div>

                <div className=" border-[.5px] rounded-md p-5 shadow-md text-center">
                    <span className="text-[3rem] flex justify-center"><MdPrivacyTip /></span>
                    <h4 className="text-lg font-semibold my-5">Privacy</h4>
                    <p>There are many variations of passages of Lorem Ipsum available, 
                        but the majority have suffered alteration in some form, 
                        by injected humour, or randomised words which donot look even slightly believable. 
                        If you are going to use a passage of Lorem Ipsum, 
                        you need to be sure there isnot anything embarrassing hidden in the middle of text. 
                        All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, 
                        making this the first true generator on the Internet</p>
                </div>

                <div className=" border-[.5px] rounded-md p-5 shadow-md text-center">
                    <span className="text-[3rem] flex justify-center"><MdTimeline /></span>
                    <h4 className="text-lg font-semibold my-5">Experience</h4>
                    <p>There are many variations of passages of Lorem Ipsum available, 
                        but the majority have suffered alteration in some form, 
                        by injected humour, or randomised words which donot look even slightly believable. 
                        If you are going to use a passage of Lorem Ipsum, 
                        you need to be sure there isnot anything embarrassing hidden in the middle of text. 
                        All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, 
                        making this the first true generator on the Internet</p>
                </div>

            </div>
        </div >
    );
}

export default ContentsHome;