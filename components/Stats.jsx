"use client";
import CountUp from "react-countup";

const stats =[
    {
        num:2,
        text:"Années d'experiences",
    },
    {
        num:3,
        text:"Projets complétés",
    },
    {
        num:8,
        text:"Technologies maîtrisées",
    },
    {
        num:60,
        text:"Code Commits",
    },
];

const Stats = () => {
    return <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {stats.map((item,index)=>{
                    return(
                        <div
                        className="flex-1 flex gap-4 items-center justify-center
                        xl:justify-start"
                        key={index}>
                            <CountUp
                                end={item.num}
                                duration={5}
                                delay={2}
                                className="text-4xl xl:text-6xl font-extrabold"
                            />
                            <p className={`${item.text.length < 15 ? "max-w-[100 px]" : "max-w-[150px]" }
                            leadinng-snug text-white/80`}>{item.text}</p>
                        </div>
                        );
                })}
            </div>
        </div>
    </section>;
}

export default Stats;