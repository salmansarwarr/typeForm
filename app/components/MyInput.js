const MyInput = ({ field, handleChange }) => {
    if (field.type == "dropdown") {
        return (
            <select
                required={field.validations && field.validations.required}
                onChange={(e) => handleChange(field.title, e.target.value)}
                className="max-w-4xl bg-transparent border-b border-b-blue-300 placeholder:text-blue-400 p-2 sm:p-3 outline-none text-black text-xl w-full sm:w-full"
            >
                {field.properties.choices.map((opt) => (
                    <option
                        key={opt.id}
                        value={opt.label}
                        className="py-1 sm:py-2"
                    >
                        {opt.label}
                    </option>
                ))}
            </select>
        );
    }

    return (
        <input
            onChange={(e) => handleChange(field.title, e.target.value)}
            type={field.type.includes("text") ? "text" : field.type}
            className="bg-transparent border-b border-b-blue-300 placeholder:text-blue-400 p-3 outline-none text-black text-xl"
            placeholder="Type your answer here..."
            required={field.validations && field.validations.required}
        />
    );
};

export default MyInput;
