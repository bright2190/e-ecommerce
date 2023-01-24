import { Button, TextInput } from '@mantine/core';
import { IconMail } from '@tabler/icons';
import React from 'react';

const ForgotPassword: React.FC = () => {
    return (
        <>
        <h3>Forgot password</h3>
            <TextInput variant={"default"} icon={<IconMail />} size={"md"} placeholder={"Enter email"} mb={15} type={"email"} />
            <Button size={"md"} color={"teal"}>Submit</Button>
        </>
    );
};

export default ForgotPassword;
