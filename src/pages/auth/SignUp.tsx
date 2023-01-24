import { Button, PasswordInput, TextInput } from '@mantine/core';
import { IconLock, IconMail, IconUser } from '@tabler/icons';
import { Link as A } from "react-router-dom"


const SignUp: React.FC = () => {
    return (
        <>
            <h3>Sign up</h3>
            <TextInput variant={"default"} icon={<IconUser />} size={"md"} placeholder={"Enter username"} mb={15} type={"text"} />
            <TextInput variant={"default"} icon={<IconMail />} size={"md"} placeholder={"Enter email"} mb={15} type={"email"} />
            <PasswordInput variant={"default"} icon={<IconLock />} size={"md"} placeholder={"Enter password"} mb={15} />
            <PasswordInput variant={"default"} icon={<IconLock />} size={"md"} placeholder={"Enter password again"} mb={15} />
            <Button size={"md"} color={"teal"}>Sign up</Button>
            <p className={"more"}><A to="/auth/sign-in">Sign in</A> if you already have an account</p>
        </>
    );
};

export default SignUp;
