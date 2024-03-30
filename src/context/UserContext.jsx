import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

const AuthProvider = ({ ...prop }) => {
    const [user, setUser] = useState({
        id: 1,
        name: "Hao",
        email: "cc@gmail.com"
    })
    const value = { user, setUser }
    return <AuthContext.Provider value={value} {...prop}></AuthContext.Provider>
}
const useUser = () => {
    const context = useContext(AuthContext);
    if (typeof context === "undefined")
        throw new Error("UseUser must be used within a AuthProvider")
    return context
}

const UserContext = () => {

    return (
        <AuthProvider>
            <Header></Header>
        </AuthProvider>
    );
};
const Header = () => {
    const { user, setUser } = useUser()
    return (
        <>

            {
                user ?
                    <div className="p-5 flex items-center justify-center gap-9">
                        <div className="w-10 h-10" >
                            <img className="w-full h-full object-cover rounded-full" src="../image.png" />
                        </div>
                        <h1>Wecome <strong>{user.name}</strong></h1>
                        <div className="px-3 py-6 bg-gray-400 rounded" onClick={() => {
                            setUser(null)
                        }}>Log out</div>
                    </div>
                    : <div className="text-lg text-red-400 h-screen flex items-center justify-center">Error</div>
            }
        </>
    )
}
export default UserContext;