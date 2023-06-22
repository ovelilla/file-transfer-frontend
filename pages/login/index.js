import Head from "next/head";
import Router from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useAuth from "@/hooks/useAuth";
import axios from "@/config/axios";
import Layout from "@/components/layout";
import Box from "@/components/box";
import { Content, Title, Form, Field, Label, Input, Error, Button } from "./styles";

const schema = yup
    .object({
        email: yup.string().email("Email is invalid").required("Email is required"),
        password: yup
            .string()
            .required("Password is required")
            .min(6, "Password must be at least 6 characters"),
    })
    .required();

const Login = () => {
    const { setAuth } = useAuth();
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
            const { data } = await axios.post("/users/login", values, {
                withCredentials: true,
            });
            setAuth(data);
            Router.push("/");
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
                <title>File transfer - Login</title>
            </Head>

            <Box>
                <Content>
                    <Title>Login</Title>

                    <Form onSubmit={handleSubmit(onSubmit)}>
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

                        <Button type="submit">Login</Button>
                    </Form>
                </Content>
            </Box>
        </Layout>
    );
};

export default Login;
