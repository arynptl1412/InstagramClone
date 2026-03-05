import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [followers, setFollowers] = useState([]);
    const [following, setFollowing] = useState([]);

    return (
        <UserContext.Provider value={{ loading, followers, setLoading, setFollowers, following, setFollowing }}>
            {children}
        </UserContext.Provider>
    )
}