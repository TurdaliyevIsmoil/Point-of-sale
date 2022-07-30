import Image from 'next/image'

export default ()=>{
    return <div className="drop-shadow-md bg-white overflow-hidden p-2 rounded-xl">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden">
            <Image width={'100%'} height={'100%'} src={'https://picsum.photos/seed/picsum/200/300'} layout="fill"/>
        </div>
        <div className="flex justify-between py-5 px-1">
            <h3 className='text-2xl font-semibold text-gray-900'>Sushi</h3>
            <span className='text-red-500 font-semibold'>$75</span>
        </div>
    </div>
}