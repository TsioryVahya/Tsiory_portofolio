import Link from "next/link";

import {FaGithub,FaLinkedin,FaFacebook} from "react-icons/fa"

const socials =[
    {icon:<FaGithub/>,path:"https://github.com/TsioryVahya"},
    {icon:<FaLinkedin/>,path:"https://www.linkedin.com/in/tsiory-vahya-rabearivony-974169270"},
    {icon:<FaFacebook/>,path:"https://www.facebook.com/tsiory.rabearivony"},
]

const Socials = ({containerStyles , iconStyles}) => {
    return(
        <div className={containerStyles}>
            {socials.map((item,index)=>{
                return(
                    <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                    </Link>
                );
            })}
        </div>
    );
}

export default Socials;