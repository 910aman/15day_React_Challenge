import { useState } from "react";
import Accordion from "../component/Accordion";
import '../component/Accordion.css'

const Home = () => {
    const faqs = [
        {
            id: 1,
            header: "What is Lorem Ipsum?",
            text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
        },
        {
            id: 2,
            header: "Where does it come from?",
            text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. `
        },
        {
            id: 3,
            header: "Why do we use it?",
            text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,`
        },
        {
            id: 4,
            header: "Where can I get some?",
            text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`
        }
    ]

    const [activeAcc, setActiveAcc] = useState(null)

    const handleToggle = (index) => {
        if (activeAcc === index) {
            setActiveAcc(null);
        } else {
            setActiveAcc(index);
        }
    }

    return (
        <div className="container mx-auto flex w-full h-screen self-center place-content-center ">
            <div className="min-w-full max-w-full space-y-5 p-4 shadow-xl border rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex items-center">
                <div className="my-3 col-span-8">
                    <div className="text-black">
                        <div className="flex flex-1 flex-col min-h-4">
                            <h4 className=" mb-4 text-3xl text-red-700 text-center mt-3">React Accordion</h4>
                            <div className="flex flex-col justify-between">
                            {faqs.map((faqValue, index) => (
                                <Accordion key={index} handleToggle={handleToggle} activeAcc={activeAcc} faqValue={faqValue} />
                            ))}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home