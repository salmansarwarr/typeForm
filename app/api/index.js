// const accessToken = process.env.ACCESS_TOKEN;
const accessToken = 'tfp_5oLz3gJcmoH54bfBhQuRYHqvZHweU7bmKUaXvhDSqNSL_3pYP3te2DDP3Ve'

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
