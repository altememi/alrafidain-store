import getProducts from "@/action/GetProducts";
import Container from "../com/shared/Container";
import FormWarp from "../com/shared/FormWrap";
import Home from "./home";

const Dashboard = async () => {

    return (
        <section className="min-h-screen">
            <Container>
                <FormWarp>
                        <Home />
                </FormWarp>
            </Container>
        </section>
    );
}

export default Dashboard;