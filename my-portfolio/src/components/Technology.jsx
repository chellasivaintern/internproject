function Technology() {
    const skills = [
    { name: "HTML", src: "https://pandi.genzzi.in/skills/html.png" },
    { name: "CSS", src: "https://pandi.genzzi.in/skills/css.png" },
    { name: "JS", src: "https://pandi.genzzi.in/skills/js.png" },
    { name: "Bootstrap", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThHcu9F9xg4H7sH3bo8W5nL8XTIWzzjsKZ59oxJ-giLw&s=10" },
    { name: "Tailwind", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvcLQN8OMwCvqmExKeyiYpX3CUUIEj_7HXGeqXE4DG0w&s=10" },
    { name: "PHP", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw_0MISIlMcvqJze9oxDbqDE9TtbBORv1TYj55SKsd5g&s=10" },
    { name: "Laravel", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFgwzBGSon7TMLVpI3h672yE57QKgwGW088B-nDgUWDA&s=10" }, // replace with Laravel logo
    { name: "React", src: "https://pandi.genzzi.in/skills/react.png" },
    { name: "MySQL", src: "https://pandi.genzzi.in/skills/MySQL.png" },
    { name: "Git", src: "https://pandi.genzzi.in/skills/Git.png" },
    { name: "MongoDB", src: "https://pandi.genzzi.in/skills/MongoDB.png" },
    { name: "Postman", src: "https://pandi.genzzi.in/skills/Postman.png" },
  ];
    return (
    <section className=" pt-10 pb-20" id="tech">
        <div className="2xl:container mx-auto">
            <h3 class="font-bold text-5xl text-center mb-10"> Technologies</h3>
            <div className="w-[90%] mx-auto grid grid-cols-4 md:grid-cols-7 gap-5">
                {skills.map((data,index) => (
                <div key={index+1} className="p-4 rounded-2xl shadow-xl flex justify-center items-center">
                    <img className="w-[50%]" src={data.src} />
                </div>
                ))}              
               
            </div>
        </div>
    </section>
    );
}

export default Technology