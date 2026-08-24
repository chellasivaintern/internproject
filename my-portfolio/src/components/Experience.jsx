function Experience() {
    return <>
   <section className="pt-10 pb-20" id="experience">
        <div className="2xl:container mx-auto">
            <h3 class="font-bold text-5xl text-center mb-10"> Work Experience</h3>
            <div className="w-[90%] mx-auto">
                <div className="shadow-xl border border-black-500 rounded-2xl grid grid-cols-1 md:grid-cols-2 sm:p-5">
                    <div>
                        <p className="font-bold text-xl px-5 py-5">Jun 2024 - Jul 2025</p>
                    </div>
                    <div className="py-5 flex flex-col gap-5">
                        <h3 className="font-bold text-3xl">Persistent Systems</h3>
                        <p class="font-serif leading-7">Participated in the full software development life cycle, from 
                        requirements gathering to deployment. Gained hands-on experience in PHP, HTML, CSS, and MySQL, building dynamic web applications. Built and maintained RESTful APIs and microservices that enabled 
                        seamless integration with front-end systems and third-party 
                        services. · </p>
                         <div class="flex flex-row gap-2">
                            <span className="border border-black-500 rounded-2xl bg-[#005f73] p-1"> Backend Development</span>
                            <span className="border border-black-500 rounded-2xl bg-[#005f73] p-1">Hands-on Projects</span>
                            <span className="border border-black-500 rounded-2xl bg-[#005f73] p-1">Database Design </span>
                            <span className="border border-black-500 rounded-2xl bg-[#005f73] p-1">RESTful API Integration</span>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </section>
    </>;
}
export default Experience