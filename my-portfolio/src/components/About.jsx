function About() {
    return <>
    <section className="pt-10 pb-20" id="about">
        <div className="2xl:container mx-auto">
            <h3 class="font-bold text-5xl text-center "> About Me</h3>
            <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 my-9 sm:gap-7">
                <div className="sm:flex justify-center">
                    <img className="flex justify-center h-[100%] w-[50%]" src="https://ik.imagekit.io/chellasiva/default-image.jpg?updatedAt=1769426834650" alt=""/>
                </div>
                <div className="text-justify space-y-4 text-2xl">
                    <p>
                        I am a <b>Software Engineer</b> with a strong passion for <b>backend architecture</b>, specializing in <b>PHP, Laravel, and REST APIs</b> built specifically for mobile applications. Over the years, I have focused on designing scalable endpoints, optimizing backend performance.
                    </p>
                    
                    <p>
                        Currently, I work as an <b>Engineering Lead</b>, bridging the gap between hands-on technical execution and team strategy. In this role, I mentor developers, lead system architecture decisions, and partner with cross-functional product teams to deliver high-quality, maintainable software. 
                    </p>
                </div>
            </div>
        </div>
    </section>
    </>;
}
export default About