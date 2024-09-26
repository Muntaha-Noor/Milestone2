import { headerItems, userInfo } from "@/constants/constant";
import Image from 'next/image';
import Head from 'next/head';

const About: React.FC = () => {
    const picture = "/picture.jpeg";

    return (
        <>
            <Head>
                <title>About | {userInfo.name}</title>
                <meta name="description" content={userInfo.about} />
            </Head>
            <section id={headerItems.about.page} className="h-screen flex flex-col text-center justify-center items-center md:flex-row md:text-start ">
                <div className="m-4 md:ml-20 sm:ml-12 md:w-1/2">
                    <h2 className="text-6xl my-6">About</h2>
                    <h2 className="text-3xl my-4">Get to know me!</h2>
                    {userInfo.about.split('\n').map((paragraph, index) => (
                        <p key={index} className="mt-5 text-xl">{paragraph}</p>
                    ))}
                </div>
                <div>
                    <Image
                        src={picture}
                        alt={`Profile picture of ${userInfo.name}`}
                        width={300}
                        height={300}
                        className="rounded-full shadow-2xl mt-10"
                    />
                </div>
            </section>
        </>
    );
};

export default About;
