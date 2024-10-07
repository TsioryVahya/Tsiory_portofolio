"use client";

import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";
import {motion} from "framer-motion";

const services = [
    {
        num: '01',
        title: 'Développement d\'API',
        description: 'Je conçois des API sécurisées et performantes qui permettent aux applications et services de communiquer entre eux.',
    },
    {
        num: '02',
        title: 'Intégration de bases de données',
        description: 'J\'assure la conception, la gestion et l\'optimisation des bases de données. Que ce soit sur MySQL ou PostgreSQL.',
    },
    {
        num: '03',
        title: 'Sécurisation des applications',
        description: 'Je mets en place des mesures de sécurité avancées pour protéger les applications. Cela inclut l\'authentification sécurisée, la protection contre les injections SQL et les failles XSS.',
    },
    {
        num: '04',
        title: 'Optimisation des performances',
        description: 'J\'analyse et optimise les systèmes pour garantir une performance maximale. Cela inclut l\'optimisation des requêtes de bases de données, l\'amélioration globale de la rapidité des applications.',
    },
];


const Services = () => {
    return(
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                initial={{opacity:0}}
                animate={{
                    opacity:1,
                    transition:{delay:2.4,duration:0.4,ease:"easeIn"},
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                {services.map((service,index)=> {
                    return (
                        <div key={index}
                            className="flex-1 flex flex-col justify-center gap-6 group">
                            {/* Haut */}
                            <div className="w-full flex justify-between items-center">
                                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                            </div>
                            {/* titre */}
                            <h2 className="text-[35px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                            {/* description */}
                            <p className="text-white/60">{service.description}</p>
                            {/* bordure */}
                            <div className="border-b border-white/20 w-full"></div>
                        </div>
                    )
                })}
                </motion.div>
            </div>

        </section>
    );
}

export default Services;