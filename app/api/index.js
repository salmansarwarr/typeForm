const accessToken = process.env.ACCESS_TOKEN;

export const getFormData = async () => {
    try {
        const res = await fetch('https://api.typeform.com/forms/SLezlOPT', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            }
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
        }

        return res.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}
