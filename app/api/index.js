const accessToken = process.env.ACCESS_TOKEN;

export const getFormData = async () => {
    const res = await fetch('https://api.typeform.com/forms/SLezlOPT', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        }
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}