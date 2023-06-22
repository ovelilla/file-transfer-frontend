import Head from "next/head";
import Router from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "@/config/axios";
import Layout from "@/components/layout";
import Box from "@/components/box";
import { Content, Title, Form, Field, Label, Input, Error, Button } from "./styles";

const schema = yup
    .object({
        name: yup.string().required("Name is required"),
        email: yup.string().email("Email is invalid").required("Email is required"),
        password: yup
            .string()
            .required("Password is required")
            .min(6, "Password must be at least 6 characters"),
    })
    .required();

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (values) => {
        try {
            await axios.post("/users/register", values, {
                withCredentials: true,
            });
            Router.push("/login");
        } catch (error) {
            Object.keys(error.response.data.errors).forEach((key) => {
                setError(key, { message: error.response.data.errors[key] });
            });
        }
    };

    return (
        <Layout>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>File transfer - Register</title>
            </Head>

            <Box>
                <Content>
                    <Title>Register</Title>

                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Field>
                            <Label htmlFor="name">Nombre</Label>
                            <Input type="text" name="name" {...register("name")} />
                            {errors.name && <Error>{errors.name.message}</Error>}
                        </Field>

                        <Field>
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" name="email" {...register("email")} />
                            {errors.email && <Error>{errors.email.message}</Error>}
                        </Field>

                        <Field>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" name="password" {...register("password")} />
                            {errors.password && <Error>{errors.password.message}</Error>}
                        </Field>

                        <Button type="submit">Register</Button>
                    </Form>
                </Content>
            </Box>
        </Layout>
    );
};

export default Register;
