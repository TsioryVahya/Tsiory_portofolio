"use client";

import {FaHtml5,FaCss3,FaJs,FaPhp,FaReact,FaNodeJs} from "react-icons/fa";
import { SiTailwindcss , SiLaravel,SiBootstrap,SiPostgresql,SiMysql,SiGithub} from "react-icons/si";

const about = {
    title:"A propos de moi",
    description:"Passionné par le développement web, je suis Tsiory Vahya Rabeaivony, étudiant en deuxième année à l'IT University. Avec deux ans d'expérience dans la création de solutions numériques, j'aime relever des défis techniques et transformer des idées en réalité. Toujours en quête d'apprentissage, je m'efforce de rester à jour avec les dernières tendances technologiques.",
    info : [
        {
            fieldName:"Nom:",
            fieldValue:"RABEARIVONY",
        },
        {
            fieldName:"Prénom:",
            fieldValue:"Tsiory Vahya",
        },
        {
            fieldName:"Téléphone:",
            fieldValue:"+261346739592",
        },
        {
            fieldName:"Email:",
            fieldValue:"tsioryvahyarabearivony@gmail.com",
        },
        {
            fieldName:"Etude:",
            fieldValue:"Deuxième année (IT University)",
        },
        {
            fieldName:"Expériences:",
            fieldValue:"2 ans",
        },
    ]
};

const experience ={
    icon:"",
    title:"Mes expériences",
    description:"Développeur back-end avec deux ans d'expérience, spécialisé dans la création de solutions web innovantes, alliant compétences en back-end et un peu de front-end pour offrir une expérience utilisateur optimale",
    items:[
        {
            company:"Projet Personelle",
            position:"Développeur Full Stack",
            duration:"Juillet 2024 - present",
        },
        {
            company:"Océanes Adventures",
            position:"Stagiaire Développeur Back-End",
            duration:"Avril 2024 - Juin 2024",
        },
        {
            company:"SMARTELIA",
            position:"Stagiaire",
            duration:"septembre 2023 - novembre 2023",
        },
    ]
};

const education ={
    icon:"",
    title:"Mes Etudes",
    description:"Actuellement étudiant en Licence en Informatique à l'IT University, j'ai acquis des compétences solides en développement web grâce à une formation pratique et théorique, notamment à Passerelles Numériques Madagasikara.",
    items:[
        {
            institution:"IT University",
            degree:"Licence en Informatiques",
            duration:"2023 - present",
        },
        {
            institution:"Passerelles Numériques Madagasikara",
            degree:"Formation en Développement Web",
            duration:"2022 - 2023",
        },
        {
            institution:"Mathématiques et Informatiques Ankatso",
            degree:"Premiére année",
            duration:"2021 - 2022",
        },
        {
            institution:"Lycée Jules Ferry Faravohitra",
            degree:"Baccalauréat",
            duration:"2020",
        },
    ]
};
const skills ={
    title:"Mes compétences",
    description:"Fort d'une expertise polyvalente, je suis capable de concevoir et développer des solutions numériques efficaces, alliant créativité et rigueur technique.",
    skillList:[
        {
            icon:<FaHtml5/>,
            name:"Html 5",
        },
        {
            icon:<FaCss3/>,
            name:"Css 3",
        },
        {
            icon:<FaJs/>,
            name:"Javascript",
        },
        {
            icon:<FaPhp/>,
            name:"PHP",
        },
        {
            icon:<FaReact/>,
            name:"React",
        },
        {
            icon:<SiTailwindcss/>,
            name:"Tailwind",
        },
        {
            icon:<SiBootstrap/>,
            name:"Bootstrap",
        },
        {
            icon:<FaNodeJs/>,
            name:"NodeJs",
        },
        {
            icon:<SiLaravel/>,
            name:"Laravel",
        },
        {
            icon:<SiPostgresql/>,
            name:"PostgreSQL",
        },
        {
            icon:<SiMysql/>,
            name:"MySQL",
        },
        {
            icon:<SiGithub/>,
            name:"Github",
        },
    ]
};

import {Tabs,TabsContent,TabsList,TabsTrigger} from "@/components/ui/tabs";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import {ScrollArea} from "@/components/ui/scroll-area";
import {motion} from "framer-motion";



const Resumer = () => {
    return (
        <motion.div 
            initial={{opacity:0}}
            animate={{
                opacity:1,
                transition:{delay:2.4,duration:0.4,ease:"easeIn"},
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-40"
        >
            <div className="container mx-auto">
                <Tabs
                defaultValue="expérience"
                className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="etude">Etudes</TabsTrigger>
                        <TabsTrigger value="expérience">Expériences</TabsTrigger>
                        <TabsTrigger value="compétences">Compétences</TabsTrigger>
                        <TabsTrigger value="apropos">A propos de moi</TabsTrigger>
                    </TabsList>
                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="expérience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea>
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item,index)=>{
                                            return (
                                                <li key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1" >
                                                    <span className="text-accent" >{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left" >{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60" >{item.company}</p>
                                                    </div>
                                                </li>
                                            );
                                        })
                                    }
                                    </ul>
                                </ScrollArea>

                            </div>
                        </TabsContent>
                        <TabsContent value="etude" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{education.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {education.description}
                                    </p>
                                    <ScrollArea>
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                            {education.items.map((item,index)=>{
                                                return (
                                                    <li key={index}
                                                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1" >
                                                        <span className="text-accent" >{item.duration}</span>
                                                        <h3 className="text-xl max-w-[290px] min-h-[60px] text-center lg:text-left" >{item.degree}</h3>
                                                        <div className="flex items-center gap-3">
                                                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                            <p className="text-white/60" >{item.institution}</p>
                                                        </div>
                                                    </li>
                                                );
                                            })
                                        }
                                        </ul>
                                    </ScrollArea>

                            </div>
                        </TabsContent>
                        <TabsContent value="compétences" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left" >
                                    <h3 className="text-4xl font-bold" >{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                        {skills.skillList.map((skill,index)=>{
                                            return (
                                                <li key={index}>
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group" >
                                                                <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className="capitalize">{skill.name}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                            )
                                        })}
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="apropos" className="w-full text-center xl:text-left">
                                <div className="flex flex-col gap-[30px]" >
                                    <h3 className="text-4xl font-bold" >{about.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0" >{about.description}</p>
                                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0" >
                                        {about.info.map((item,index)=>{
                                            return(
                                                <li key={index} className="flex items-center justify-center xl:justify-start gap-4 " >
                                                    <span className="text-white/60" >{item.fieldName}</span>
                                                    <span className="text-xl/60" >{item.fieldValue}</span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
}

export default Resumer;