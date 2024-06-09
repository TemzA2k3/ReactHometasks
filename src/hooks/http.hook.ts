export const useFetch = () => {
    const request = async (url: string, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
        try {
            const response = await fetch(url, {method, body, headers});

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const info = response
            const data = await info.json();

            const storedApiInfo: string | null = localStorage.getItem('ResponseInfo');
            const getApiInfo = storedApiInfo ? JSON.parse(storedApiInfo) : [];
            let newInfo = []

            const currentResponseInfo = {
                "status": info.status,
                "body": body
            }

            if (getApiInfo !== null){
               newInfo = [...getApiInfo, {currentResponseInfo}]
            } else {
                newInfo = [{currentResponseInfo}]
            }

            localStorage.setItem("ResponseInfo", JSON.stringify(newInfo))

            return data;
        } catch(e) {
            throw e;
        }
    };
    return { request }
}
