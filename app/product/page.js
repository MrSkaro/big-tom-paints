"use client"
import useCart from '../(store)/store'

export default function ProductPage(props) {
    const { searchParams } = props
    const { price_id } = searchParams
    const product = useCart(state => state.product)
    const addItemToCart = useCart(state => state.addItemToCart)
    const { name, description, cost, productInfo} = product


    if (!product?.name) {
        window.location.href='/'
    }

    function handleAddToCart() {
        const newItem = {
            quantity: 1,
            price_id: price_id,
            name,
            cost
        }
        addItemToCart({newItem})
    }

    return(
        <div className="flex flex-col p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1000px] mx-auto">
                <div className="md:p-2 md:shadow">
                    <img src={productInfo.images[0]} alt={name} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-2 p-4">
                    <div className="flex md:flex-col md:items-start text-xl items-center justify-between gap-2">
                        <h3>{name}</h3>
                        <p>£{cost/100}</p>      
                    </div>
                    <p className="text-sm flex-1">{description}</p>
                    <button onClick={handleAddToCart} className="bg-slate-700 text-white hover:bg-slate-500 cursor-pointer ml-auto px-4 py-2">Add to cart</button>
                </div>
            </div>
        </div>
    )
}