import Container from "../com/shared/Container";
import FormWarp from "../com/shared/FormWrap";
import NullData from "../com/ui/NullSata";

const Dashboard = () => {
    return (
        <section className="min-h-screen">
            <Container>
                <FormWarp>
                    <div>
                        <NullData text={"AS SOON..."}/>
                    </div>
                </FormWarp>
            </Container>
        </section>
    );
}

export default Dashboard;