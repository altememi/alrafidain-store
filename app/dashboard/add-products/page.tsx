import Container from "@/app/com/shared/Container";
import AddProductsForm from "./addproductsForm";
import FormWarp from "@/app/com/shared/FormWrap";
import { getCurrentUser } from "@/action/GetCurrentUser";
import NullData from "@/app/com/ui/NullSata";
import Heading from "@/app/com/ui/Heading";

const AddProducts = async () => {

    const currentUser = await getCurrentUser();

    if (!currentUser || currentUser.role !== 'ADMIN') {
        return <NullData text="Oops. Access denied"/>
    }
    return (
        <section className="">
            <Container>
                <div className="sticky p-5 border-b-[.5px] border-slate-200 max-w-[650px] flex flex-col 
                                justify-center items-center mx-auto rounded-t-[1rem]">
                <Heading title={"Add A New Product"} center />
                </div>
                <FormWarp>
                    <AddProductsForm />
                </FormWarp>
            </Container>
        </section>
    );
}

export default AddProducts;