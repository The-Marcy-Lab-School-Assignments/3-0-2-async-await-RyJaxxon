export const fetchHandler = async (url, options = {}) => {
    try {
        const response = await fetch(url, options)
        if (!response.ok) throw new Error(`Fetch failed with status - [${response.status}], [${response.statusText}]`)
        const isJson = (response.headers.get('content-type') || '').includes('application/json');
        let data = ''
        isJson ? data = await response.json() : data = await response.text();
        return [data, null];
    } catch (error) {
        console.warn(error);
        return [null, error];
    }
};

fetchHandler();