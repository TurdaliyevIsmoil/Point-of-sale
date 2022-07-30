export default () => {
    return <div className="px-3 flex flex-col gap-3">
        <div className="flex justify-between">
            <p className="text-gray-400">Subtotal</p>
            <p className="text-gray-400">$4.00</p>
        </div>
        <div className="flex justify-between">
            <p className="text-gray-400">Tax (10%)</p>
            <p className="text-gray-400">$0.40</p>
        </div>
        <div className="border-dashed border-t-2"></div>
        <div className="flex justify-between">
            <p className="text-gray-400">Total</p>
            <p className="text-gray-400">$4.40</p>
        </div>
        <button className="py-3 px-auto w-full rounded-md bg-red-500 text-white hover:text-red-500 hover:bg-gray-100">Checkout</button>
    </div>
}