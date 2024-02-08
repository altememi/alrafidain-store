import Container from "../com/shared/Container";
import CartClient from "./CartClient";

const Cart = () => {
    return (
        <section className='pt-5'>
            <Container>
                <CartClient />
            </Container>
        </section>
    );
}

export default Cart;