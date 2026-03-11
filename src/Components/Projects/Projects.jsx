import React from "react";
import ProjectCard from "./ProjectCard";
import personalBlog from "../../assets/personal-blog.png"
import wiseMysteries from "../../assets/wise-mysteries.png"
import amazonClone from "../../assets/amazon-clone.png"
import reactProfile from "../../assets/react-profile.png"
import ecomerceWeb from "../../assets/ecomerce-website.png"

const ProjectList = [
  {
    id:1,
    title: "",
    image: personalBlog,
    demo_link: "",
    source_link: ""
  },
]

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5 justify-center md:justify-start">
        <ProjectCard
          title="Profile"
          main="This is the current profile created with React vite and Tailwind css"
          image={reactProfile}
           demo_link="https://react-portfolio-eudk.vercel.app"
          source_link="https://github.com/abel254/react-portfolio"
          showDemo={false}
        />
        <ProjectCard
          title="Blogging Website"
          main="This is a blogging website created with TypeScript and used some component library"
          image={personalBlog}
          demo_link="https://personal-blog-ochre.vercel.app/"
          source_link="https://github.com/abel254/personal-blog"
        />
         <ProjectCard
          title="Ecommerce Website"
          main="This is an ecommerce website sample created with React vite and Tailwind css"
          image={ecomerceWeb}
          demo_link="https://ecommerce-shopping-pi.vercel.app/"
          source_link="https://github.com/abel254/Ecommerce-Shopping"
        />
         <ProjectCard
          title="Wise Mysteries"
          main="This is an affiliate website created with React js which saves user data to MongoDb and sends them emails."
          image={wiseMysteries}
           demo_link="https://wisemysteriesdevotion.vercel.app/"
          source_link="https://github.com/abel254/wisemysteriesdevotion"
        />
         <ProjectCard
          title="Amazon Clone"
          main="This is a sample clone of the amazon website created with TypeScript. It can add items to cart and calculate the total."
          image={amazonClone}
           demo_link="https://amazon-clone-sigma-ivory-29.vercel.app"
          source_link="https://github.com/abel254/amazon-clone"
        />
        
       
      </div>
    </div>
  );
};

export default Projects;
