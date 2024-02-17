import { MdImportExport, MdSecurity } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const ContentsHome = () => {
    return (
        <div className="h-auto">
            {/* cards NO 3 */}
            <div className="grid md:grid-cols-3 xs:grid-cols-1 gap-20 xs:gap-5 p-5 min-h-[20rem] max-h-auto text-slate-700 my-5">
                <div className=" border-[.5px] rounded-md p-5 shadow-md text-center">
                    <span className="text-[3rem] flex justify-center"><MdImportExport /></span>
                    <h4 className="text-lg font-semibold my-5">Great Experience</h4>
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
                    <h4 className="text-lg font-semibold my-5">Great Securiy</h4>
                    <p>There are many variations of passages of Lorem Ipsum available, 
                        but the majority have suffered alteration in some form, 
                        by injected humour, or randomised words which donot look even slightly believable. 
                        If you are going to use a passage of Lorem Ipsum, 
                        you need to be sure there isnot anything embarrassing hidden in the middle of text. 
                        All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, 
                        making this the first true generator on the Internet</p>
                </div>

                <div className=" border-[.5px] rounded-md p-5 shadow-md text-center">
                    <span className="text-[3rem] flex justify-center"><VscWorkspaceTrusted /></span>
                    <h4 className="text-lg font-semibold my-5">Great Privacy</h4>
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