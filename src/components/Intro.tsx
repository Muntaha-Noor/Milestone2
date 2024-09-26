import { headerItems, userInfo } from "@/constants/constant";
import Image from 'next/image';

const Intro: React.FC = () => {
    const picture = "/image.jpeg";

    return (
        <section
            id={headerItems.home.page}
            className="h-screen flex flex-col text-center justify-center items-center md:flex-row md:text-start"
        >
            <div>
                <Image
                    src={picture}
                    alt="dp"
                    width={300}
                    height={300}
                    className="rounded-full shadow-2xl mt-10"
                />
            </div>
            <div className="md:ml-20 sm:ml-12 md:w-1/2">
                <h1 className="text-7xl uppercase hidden md:block">Frontend Developer</h1>
                <h2 className="text-2xl mt-5 md:text-3xl">
                    Hi I&#39;m <span className="text-pink-600 text-3xl md:text-4xl">{userInfo.name}</span>
                </h2>
                <p
                    className='mt-4 mb-4 text-xl'
                    dangerouslySetInnerHTML={{ __html: userInfo.heading }}
                />
                <button className="bg-pink-700 w-28 h-10 rounded text-white">
                    Projects
                </button>
            </div>
        </section>
    );
};

export default Intro;
