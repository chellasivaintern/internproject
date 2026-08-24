function Projects() {
    const proj = [
        {
            projectname:"Hospital Management System (HMS)",
            description : "Designed a centralized healthcare platform to manage patient records, appointment scheduling, and staff data. Engineered a unique biometric attendance module by integrating hardware APIs with the Laravel backend to automate staff clock-in/out processes",
            image: "/image/hms.jpg",
            stack: ["PHP", "Laravel", "Mysql", "Biometric-SDK"]
        },
        {
            projectname:"Full-Stack E-Commerce Platform",
            description : " Developed a comprehensive e-commerce application featuring a dynamic product catalog and a real-time shopping cart. Built a secure checkout flow by integrating third-paty payment gateways and automated order status tracking from purchase to delivery.",
            image: "/image/ecommerce.png",
            stack: ["React.js", "Node.js", "Express", "MongoDB" , "Rest API"]
        },
    ];
    return <>
   <section className="pt-10 pb-20" id="projects">
        <div className="2xl:container mx-auto">
            <h3 class="font-bold text-5xl text-center mb-10"> Projects</h3>
            <div className="w-[90%] mx-auto space-y-5">
                {proj.map((data,index) => (
                    <div key={index+1} className="shadow-xl border border-black-500 rounded-2xl  p-5 md:flex flex-row gap-10">
                        <div className="py-5 flex flex-col gap-2 p-2 sm:justify-center items-center">
                            <img className="h-50 w-100 sm:h-70" src={data.image} />

                        </div>
                        <div className="flex-1 flex flex-col gap-1">
                            <p className="font-bold text-2xl">{data.projectname}</p>
                            <p className="text-xl">{data.description}</p>
                            <div class="flex flex-row gap-2 ">
                            {
                                data.stack.map((dt,ind) => ( 
                                    <span key={ind+1} className="text-white border border-black-500 rounded-2xl bg-[#005f73] p-2"> {dt}</span>
                                ))
                            }
                            </div>
                        </div>
                    </div>
                ))}                  
            </div>
        </div>
    </section>
    </>;
}
export default Projects