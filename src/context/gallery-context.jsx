import { createContext, useContext, useState } from "react";

const fakeData = [
    {
        id: 1,
        name: "Wegrow on Behance",
        img: "https://cdn.dribbble.com/userupload/13802710/file/original-3ed9e9b9cfd4ccbc7211483d1dd01d70.png?resize=1024x575"
    },
    {
        id: 2,
        name: "Wegrow. design",
        img: "https://cdn.dribbble.com/userupload/13780629/file/original-fc30503129ff4efec387c9d29c1332f3.jpg?resize=1024x768"
    },
    {
        id: 3,
        name: "Planet NFT Landing Page",
        img: "https://cdn.dribbble.com/userupload/12347365/file/original-803d02f4c6ca95bc29040988502a3f40.jpg?resize=1024x768&vertical=center"
    },
]

const GalleryContext = createContext();



const GalleryProvider = (prop) => {
    const [data, setData] = useState(fakeData)
    
    const value = { data, setData }
    return (
        <GalleryContext.Provider value={value} {...prop}></GalleryContext.Provider>
    )
}

function useGallery() {
    const context = useContext(GalleryContext)
    if (typeof context === "undefined")
        throw new Error('useGallerry must be used within a GallerryProvider')
    return context;
}

export { useGallery, GalleryProvider }; 