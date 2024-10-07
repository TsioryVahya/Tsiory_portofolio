"use client"

import { motion } from "framer-motion";
import React , { useState } from "react";

import {Swiper , SwiperSlide} from "swiper/react";
import "swiper/css";

import {BsArrowUpRight, BsGithub} from "react-icons/bs";


import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: '01',
        category: 'Projet Personnel (FullStack)',
        title: "Trano Bongo",
        description: "Trano Bongo est un projet personnel d'agence immobilière que j'ai développé pour améliorer mes compétences en développement web. Ce site propose une gestion complète des propriétés avec une interface utilisateur moderne et intuitive. Les fonctionnalités incluent l'affichage des propriétés, le contact des vendeurs intéressés via email, un tableau de bord pour l'administrateur et bien d'autres.",
        stack: [{ name: "PHP" }, { name: "JS" }, { name: "Bootstrap" }, { name: "Laravel 11" }, { name: "MySQL" }],
        image: "/assets/projets/tranobongo.jpg",
        github: "",
    },
    {
        num: '02',
        category: 'Stage (Back-End)',
        title: "Site Web Interne",
        description: "C'est un projet qu'on a réalisé chez Océanes Adventures. On a créé un site web pour gérer les voyages de chaque voiture. Ce site propose une gestion des voitures, des trajets avec une page de planning et bien d'autres.",
        stack: [{ name: "Bootstrap" }, { name: "PHP" }],
        image: "/assets/projets/stage.jpg",
        github: "",
    },
    {
        num: '03',
        category: 'Projet Personnel (FullStack)',
        title: "Tsiory Vahya Portfolio",
        description: "Ce portfolio est un projet conçu pour mettre en valeur mes compétences en développement web et mes réalisations professionnelles. Il offre une navigation fluide et réactive, permettant de découvrir mes projets, mon parcours et mes services. Le site inclut également des fonctionnalités telles qu'un bouton de téléchargement de CV, une section détaillant mes compétences techniques, ainsi qu'une page dédiée à mes projets clés.",
        stack: [{ name: "React" }, { name: "Next.js" }, { name: "Tailwind" }],
        image: "/assets/projets/portofolio.jpg",
        github: "",
    }
];



const Projets = () => {
    const [project,setProject] = useState (projects[0]);
    const handleSlideChange = (swiper) => {
        const currentIndex =swiper.activeIndex;
        setProject(projects[currentIndex]);
    }

    return (
        <motion.section 
            initial={{opacity:0}}
            animate={{opacity:1}}
            className="min-h[80vh] flex flex-col justify-center py-12 xl:px-0"
            >
            <div className="container mx-auto" >
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            <h2 className="text-[32px] font-bold leading-none wordWrap:break-word text-accent group-hover:text-accent transition-all duration-500 capitalize">
                                {project.title}
                            </h2>
                            <h2 className="text-[22px] font-bold leading-none wordWrap:break-word text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category}
                            </h2>                    
                            <p className="text-white/60"> {project.description} </p>
                            <ul className="flex flex-col md:flex-row gap-4">
                                {project.stack.map((item,index)=>{
                                    return (
                                        <li key={index} className="text-xl text-accent" >
                                            {item.name}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className=" border border-white/20"></div>
                            {/* <div className=" flex items-center gap-4">
                                    <Link href={project.github}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group" >
                                                    <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Github repository</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                            </div> */}

                        </div>
                    </div>
                <div className="w-full xl:w-[50%]">
                    <Swiper 
                        spaceBetween={30}
                        slidesPerView={1}
                        className="xl:h-[520px] mb-12"
                        onSlideChange={handleSlideChange}
                    >
                        {projects.map((project,index)=>{
                            return (<SwiperSlide key={index} className="w-full">
                                    <div className="h-[460px] relative group flex justify-center items-center bg-transparent">
                                        <div className="absolute top-0 bottom-0 w-full h-full  z-10"></div>
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={project.image} 
                                                fill
                                                className="object-contain"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                            </SwiperSlide>
                            );
                        })}
                        <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
                        btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
                    </Swiper>
                    </div>
                </div>
            </div>
            
        </motion.section>
    );
}

export default Projets;