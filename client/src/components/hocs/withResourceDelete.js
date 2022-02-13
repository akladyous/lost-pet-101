import axios from "axios";
import { useState, useEffect } from "react";

export default function withResourceDelete(Component, url) {
    return (props) => {
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState(false);
        const [message, setMessage] = useState(null);
        const [resource, setResource] = useState(null);

        useEffect(() => {
            const controller = new AbortController();
            (async () => {
                setLoading(true);
                setLoading(true);
                const config = {
                    headers: { "Content-type": "application/json" },
                    signal: controller.signal,
                };
                const response = await axios.delete(url, config);
                return response;
            })()
                .then((response) => {
                    setLoading(false);
                    if (response && response.status === 200) {
                        setMessage("Completed");
                        setResource(response.data);
                    } else {
                        setError(true);
                        setMessage("Error");
                    }
                })
                .catch((error) => {
                    if (error.response.data.hasOwnProperty("error")) {
                        //backend error
                        setLoading(false);
                        setError(true);
                        setMessage(error.response.data.error);
                    } else {
                        //server error
                        setLoading(false);
                        setError(true);
                        setMessage(error.message);
                    }
                })
                .finally(() => {
                    controller.abort();
                });
        }, []);
        return (
            <Component
                {...props}
                data={resource}
                loading={loading}
                error={error}
                message={message}
            />
        );
    };
}
