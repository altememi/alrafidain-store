import { getCurrentUser } from "@/action/GetCurrentUser";
import getProducts from "@/action/GetProducts";
import NullData from "@/app/com/ui/NullSata";
import Container from "@/app/com/shared/Container";
import ManageAllProducts from "./ManageProducts";
import Heading from "@/app/com/ui/Heading";

const ManageProducts = async () => {

    const products = await getProducts({category: null});
    const currentUser = await getCurrentUser();

    if (!currentUser || currentUser.role !== 'ADMIN') {
        return <NullData text="Oops. Access denied"/>
    }

    return ( 
        <section>
            <Container>
            <div className="sticky p-5 border-b-[.5px] border-slate-200 max-w-[650px] flex flex-col 
                                justify-center items-center mx-auto rounded-t-[1rem]">
                <Heading title={"Manage All Products"} center />
                </div>
               <ManageAllProducts products={products}/>
            </Container>
        </section>
     );
}
 
export default ManageProducts;