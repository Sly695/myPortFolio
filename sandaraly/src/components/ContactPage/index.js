import React, { useState } from 'react';
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormInput,
    FormLabel,
    FormButton,
    Text
} from './ContactElements';
import {Navigate} from 'react-router-dom';


const ContactPage = () => {

    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [response, setResponse] = useState(false)

    function onChangeEmail(arg) {
        setEmail(arg)
    }

    function onChangeMessage(arg) {
        setMessage(arg)
    }

    async function submit() {
        let rawResponse = await fetch("/sendEmail", {
            body: `email=${email}&message=${message}`,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            method: "post",
        })

        let response = await rawResponse.json();

        setResponse(response.status);

    }

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">sly.</Icon>
                    <FormContent>
                        <Form>
                            <FormH1>Contactez-moi</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput onChange={(arg) => onChangeEmail(arg.target.value)} type="email" required />
                            <FormLabel htmlFor='for'>Message</FormLabel>
                            <FormInput onChange={(arg) => onChangeMessage(arg.target.value)} type="text" required />
                            <FormButton onClick={() => submit()}>Envoyer</FormButton>
                            <p style={{marginTop: "30px", color: "#06BF71", textAlign: "center"}}>{response}</p>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default ContactPage;
