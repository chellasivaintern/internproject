function Education() {
    const educ = [
        {
            coursename:"Computer Science (BSC)",
            instituename : "Sri Meenakshi govt arts and science college for women(A)",
            location: "Madurai,India",
            year: "Jun 2015 - may 2018",
            gpa:"GPA: 75%"
        },
        {
            coursename:"HSC",
            instituename : "TVK Higher secondary school",
            location: "Madurai,India",
            year: "Jun 2014 - may 2015",
            gpa:"GPA: 84%"
        },
        {
            coursename:"SSLC",
            instituename : "TVK Higher secondary school",
            location: "Madurai,India",
            year: "Jun 2012 - may 2013",
            gpa:"GPA: 96%"
        },
    ];
    return <>
   <section className="pt-10 pb-20" id="education">
        <div className="2xl:container mx-auto">
            <h3 class="font-bold text-5xl text-center mb-10"> Education</h3>
            <div className="w-[90%] mx-auto space-y-5">
                {educ.map((data,index) => (
                    <div key={index+1} className="shadow-xl border border-black-500 rounded-2xl  p-5 md:flex flex-row justify-between">
                        <div className="py-5 flex flex-col gap-1 p-2">
                            <p className="font-bold text-2xl">{data.coursename}</p>
                            <p className="text-xl">{data.instituename}</p>
                            <p className="text-xl">{data.location}</p>

                        </div>
                        <div className="py-5 flex flex-col gap-1">
                            <p className="font-bold text-xl">{data.year}</p>
                            <h3 className="font-bold text-xl text-teal-700">{data.gpa}</h3>
                        </div>
                    </div>
                ))}                  
            </div>
        </div>
    </section>
    </>;
}
export default Education