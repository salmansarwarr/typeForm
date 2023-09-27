import { getFormData } from "../api";
import Form from "../components/Form";

const Page = async () => {
    const {fields} = await getFormData() || [];

    return (
        <>
            <Form formData={fields}/>
        </>
    );
}

export default Page;
