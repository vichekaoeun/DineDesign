import Menubar from './Menubar';

export default function Title() {
    return (
        <div className="flex flex-col justify-center gap-20 p-5 background-image min-h-screen">
            <div className="flex flex-col gap-10">
                <p className="text-4xl text-center satisfy-regular">
                    Taste of India
                </p>
                <span className="text-6xl">
                    <h1 className="text-white font-bold text-shadow text-center">Restaurant Title</h1>
                </span>
                <span className='flex justify-center'>
                    <p className="text-lg text-center max-w-prose">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque sagittis suscipit elit quis lacinia. Pellentesque quis vulputate elit.
                    </p>
                </span>
            </div>
            <div className="flex justify-center">
                <Menubar />
            </div>
        </div>
    )
} 