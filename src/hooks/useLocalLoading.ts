import { useEffect, useState } from "react";

const useLocalLoading = (isLoading: boolean) => {
    const [localLoading, setLocalLoading] = useState(true);

    
    useEffect(() => {
        if (!isLoading) {
            setLocalLoading(false);
        } else {
            setLocalLoading(true);
        }
    }, [isLoading]);
    
    return localLoading;
}

export default useLocalLoading;
