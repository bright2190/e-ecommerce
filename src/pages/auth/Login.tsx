import { Button, PasswordInput, TextInput } from '@mantine/core';
import { IconLock, IconMail } from '@tabler/icons';
import { Link as A } from "react-router-dom"



const Login: React.FC = () => {
    return (
        <>
            <h3>Sign in</h3>
            <TextInput variant={"default"} icon={<IconMail />} size={"md"} placeholder={"Enter username or email address"} mb={15} type={"text"} />
            <PasswordInput variant={"default"} icon={<IconLock />} size={"md"} placeholder={"Enter password"} mb={15} />
            <div className='forgot_password_container'><A to="/auth/forgot-password">Forgot password?</A></div>
            <Button size={"md"} color={"teal"}>Sign in</Button>
            <p className={"more"}><A to="/auth/sign-up">Sign up</A> if you don't have an account</p>
        </>
    );
};

export default Login;
