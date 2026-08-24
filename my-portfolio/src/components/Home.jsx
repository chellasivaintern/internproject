function Home() {
    const resumeUrl ="/chellaresume.docx"; 
    return <>
    <section className="pt-32 pb-20">
        <div className="2xl:container mx-auto">
            <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 sm: gap-10">
                <div className="flex flex-col gap-5">
                    <h3 className="font-bold text-5xl">Chellammal Sivasubramanian</h3>
                    <h5 className="font-bold text-[32px] bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">Senior Software Developer</h5>
                    <p className="text-[20px] leading-[30px]">  PHP Developer with 7 years of experience building and deploying 
                    robust web applications. My expertise lies in backend development, 
                    optimizing databases, and integrating complex APIs to ensure smooth, 
                    high-performance systems.   </p>
                    <div className="flex flex-row gap-3">
                    <span className="font-bold text-2xl">Resume </span>
                    <div className="bg-gray-300 w-[5%] rounded-lg flex justify-center items-center">
                        <a href={resumeUrl} target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
                        </a>
                    </div>
                    <div className="bg-gray-300 w-[5%]  rounded-lg flex justify-center items-center">
                        <a href={resumeUrl} download="chellaresume.docx">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download-icon lucide-download"><path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/></svg>
                        </a>
                    </div>
                </div>
                </div>
                <div className="flex justify-center">
                    <img className="h-[100%] w-[50%]" src="https://ik.imagekit.io/chellasiva/default-image.jpg?updatedAt=1769426834650" alt="profile" />
                </div>
            </div>
        </div>
    </section>
    </>;
}
export default Home