import { useEffect } from "react";
import { useForm, useController } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "@/config/axios";
import Select from "react-select";
import useAuth from "@/hooks/useAuth";
import useLink from "@/hooks/useLink";
import useFiles from "@/hooks/useFiles";
import { Form, Field, Label, Input, Error, Button, selectStyles } from "./styles";
import { schema } from "./validationSchema";
import { options } from "./downloadOptions";

const FilesForm = () => {
    const { auth } = useAuth();
    const { setLink } = useLink();
    const { files, setFiles } = useFiles();
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        setError,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (values) => {
        const jsonData = JSON.stringify({
            ...values,
            downloads: values.downloads.value,
        });

        const formData = new FormData();
        files.forEach((file) => formData.append("files", file));
        formData.append("data", jsonData);

        try {
            const { data } = await axios.post("/links", formData);
            setLink(data.link);
            setFiles([]);
        } catch (error) {
            console.log(error);
        }
    };

    const { field } = useController({
        name: "downloads",
        control,
        rules: {
            required: "Downloads are required",
        },
        defaultValue: options[0],
    });

    useEffect(() => {
        setValue("title", files.length > 0 ? files[0].path : "");
    }, [files]);

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Field>
                <Label htmlFor="title">Title</Label>
                <Input type="text" id="title" {...register("title")} error={errors.title} />
                {errors.title && <Error>{errors.title.message}</Error>}
            </Field>

            <Field>
                <Label htmlFor="description">Description</Label>
                <Input type="text" id="description" {...register("description")} />
            </Field>

            {auth && (
                <>
                    <Field>
                        <Label htmlFor="downloads">Downloads</Label>
                        <Select
                            styles={selectStyles()}
                            {...field}
                            options={options}
                            instanceId="downloads"
                            isSearchable={false}
                        />
                    </Field>

                    <Field>
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password" {...register("password")} />
                    </Field>
                </>
            )}

            <Button type="submit">Create link</Button>
        </Form>
    );
};

export default FilesForm;
