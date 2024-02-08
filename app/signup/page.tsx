import AuthFormWarp from "../com/shared/AuthFormWrap";
import Container from "../com/shared/Container";
import SignupLayout from "./Layout";
import SignupForm from "./SignupForm";

const Signup = () => {
    return (
        <SignupLayout>
            <Container>
                <AuthFormWarp>
                    <SignupForm />
                </AuthFormWarp>
            </Container>
        </SignupLayout>
    );
}

export default Signup;