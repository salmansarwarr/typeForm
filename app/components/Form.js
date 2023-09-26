"use client";

import { useState } from "react";
import MyInput from "./MyInput";

const Form = ({ formData }) => {
    const [quesNo, setQuesNo] = useState(0);
    const [quesToAnsMap, setQuesToAnsMap] = useState({});

    const handleChange = (ques, ans) => {
        setQuesToAnsMap((prev) => ({
            ...prev,
            [ques]: ans,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuesNo((prev) => prev + 1);
        console.log(quesToAnsMap);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full h-screen bg-gray-200 flex flex-col justify-center gap-4 items-center"
        >
            <h1 className="text-blue-900 text-3xl text-center font-medium">
                {formData[quesNo].title}
            </h1>
            <MyInput field={formData[quesNo]} handleChange={handleChange} />
            <button
                type="submit"
                className="w-[300px] bg-blue-500 hover:bg-blue-600 p-2 px-4 rounded mt-2"
            >
                Next
            </button>
            <button
                disabled={quesNo == 0}
                onClick={(e) => {
                    e.preventDefault();
                    setQuesNo((prev) => prev - 1);
                }}
                className="rounded-full flex justify-center items-center text-2xl bg-blue-500 hover:bg-blue-400 w-12 h-12 absolute bottom-4 left-4 md:bottom-8 md:left-8 lg:bottom-14 lg:left-14"
            >
                {"<"}
            </button>
        </form>
    );
};

export default Form;
