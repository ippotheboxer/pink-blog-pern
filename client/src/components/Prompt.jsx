import {useState} from "react";

const prompsList = ["How am I feeling today?",
    "How do I want to feel?",
    "What am I looking forward to this week?",
    "What is something I am grateful for right now?",
    "What is something that has made me happy recently?",
    "What is something you love about yourself?",
    "What have I learnt recently that I didn't know before?",
    "What changes could I make to my daily routine to make myself feel happier and healthier?",
    "What's the best thing that could happen to me tomorrow?",
    "What would people say are my best qualities?",
    "What have I accomplished recently that I am proud of?",
    "What's my happy place and why?",
    "What's the kindest thing someone has done for me recently?",
    "What's on my worry list right now? And what can I do about it?",
    "What things do I love about this time of year?",
    "What cheers me up when I am down?",
    "When am I at my happiest?",
    "Who do I really admire and why?",
    "What is something in my life I would like to change?",
    "Describe how I'd like my life to look in 5 years time.",
    "What difficult things have I been through that have brought unexpected positives?",
    "What would I do if I knew I couldn't fail?"
];

export default function Prompt() {
    const [prompt, setPrompt] = useState("Click on me to generate a prompt");

    const getRandomPrompt = () => {
        return prompsList[Math.floor(Math.random() * prompsList.length)];
    };

    const handleClick = () => {
        const randomPrompt = getRandomPrompt();
        setPrompt(randomPrompt);
    }

    return (<h3 onClick={handleClick}>{prompt}</h3>);
}