import { useGallery } from "../../context/gallery-context";

const Products = () => {
    const { data, } = useGallery();
    return (
        <>
            <div className="grid grid-cols-3 gap-10 p-5 ">
                {data.map(({ id, img }, ) => (
                    <div key={id} className="relative">
                        <img src={img} className="w-full h-full rounded-lg  object-cover" />
                        <span className="absolute top-0 right-0 m-5 p-1 flex items-center justify-center text-black bg-white rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="w-9 h-9 ">
                                <path d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </span>
                        <button className="py-2 px-6 bg-white text-black rounded-md absolute bottom-5 left-2/4 -translate-x-2/4">ADD TO CART</button>
                    </div>
                ))}
            </div>

        </>
    );
};

export default Products;