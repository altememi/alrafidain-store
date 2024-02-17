import { ProductDetails } from "./productDetails";
import ListRating from "./ListRating";
import Container from "@/app/com/shared/Container";
import getProductById from "@/action/GetProductById";
import NullData from "@/app/com/ui/NullSata";


interface IParams {
    productId?: string;
}

const Product = async ( {params} : { params: IParams}) => {
    
    const product = await getProductById(params);

    if(!product) return <NullData text={"Oop"}/>
    return ( 
        <section className="p-8">
            <Container>
                <ProductDetails product={product} />
                {/* <div className="flex flex-col mt-20 gap-5">
                    <div>Add Rating</div>
                    <ListRating product={product}/>
                </div> */}
            </Container>
        </section>
     );
}
 
export default Product;