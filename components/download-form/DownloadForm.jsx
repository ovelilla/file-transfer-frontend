import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "@/config/axios";
import useLink from "@/hooks/useLink";
import { Form, Field, Label, Input, Error, Button } from "./styles";
import { schema } from "./validationSchema";

const DownloadForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        setError,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const router = useRouter();
    const { url } = router.query;
    const { setLink, setPassword } = useLink();

    const onSubmit = async (values) => {
        try {
            const { data } = await axios.post(`/links/${url}`, values);
            setLink(data.link);
            setPassword(data.password);
        } catch (error) {
            console.log(error);
            setError("password", { message: error.response.data.message });
        }
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Field>
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" {...register("password")} />
                {errors.password && <Error>{errors.password.message}</Error>}
            </Field>

            <Button type="submit">Validate</Button>
        </Form>
    );
};

export default DownloadForm;
