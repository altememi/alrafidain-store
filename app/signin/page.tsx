import SigninLayout from "./Layout";
import SigninForm from "./SigninForm";
import Container from "../com/shared/Container";
import { getCurrentUser } from "@/action/GetCurrentUser";
import AuthFormWarp from "../com/shared/AuthFormWrap";

const Signin = async () => {

    const user = await getCurrentUser();

    return (
        <SigninLayout>
            <Container>
                <AuthFormWarp>
                    <SigninForm currentUser={user}/>
                </AuthFormWarp>
            </Container>
        </SigninLayout>
    );
}

export default Signin;