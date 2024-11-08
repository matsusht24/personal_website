import { FaGithub, FaLinkedin,  } from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    { 
      name: 'Github', 
      href: 'https://github.com/matsusht24',
      icon: FaGithub,
    },
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/trent-matsushima/',
      icon: FaLinkedin,
    },
    {
      name: "Email",
      href: "trentmatsushima@gmail.com",
      icon: MdOutlineEmail,
    },
  ];
  
  export default function NavLinks(){
    return (
            <>
              {links.map((link) => {
               
                  const LinkIcon = link.icon;
                  return (
                  
                    <Link
                      key={link.name}
                      href={link.href}
                      className="flex h-[42px] grow items-center justify-center rounded-md font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-4"
                    >
                    <LinkIcon className="w-full h-full" />
                    </Link>
                    
                  );
               }
            
            )}
            </>
    );
} 