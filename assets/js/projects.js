const projects = [
  {
    id: "portfolio-0",
    title: "Multiplo Open Robot System",
    tags: ["robotics", "startup"],
    thumbnail: "assets/img/portfolio/thumbs/multiplo-thumb.jpg",
    image: "assets/img/portfolio/multiplo.jpg",
    link: "https://www.kickstarter.com/projects/1689254125/multiplo-create-your-own-robot",
    linkText: "Kickstarter Campaign",
    description: "We develop this system in order to prototype robots. But we ended up inventing a platform to build things. We have been using it at public schools and it has proved to be suitable as teaching material. They are currently using it for STEM Education (Science, Technology, Engineering and Mathematics) for young students.<br>Making a robot was a challenge some time ago, and only a few could have access to that. We want to reach a critical mass that allows us to break boundaries. We have found Arduino's philosophy inspiring. We think that it's time that their concept spreads to other areas.<br>We want our fully Open Source Robot Kit to get into the hands of educators, artists and any kind of creative people. It is our dream to get robotics close to people. We think it’s time for a change. Robotics for Everybody!"
  },
  {
    id: "portfolio-1",
    title: "Plobot: a physical programmable robot",
    tags: ["coding", "startup"],
    thumbnail: "assets/img/portfolio/thumbs/plobot.jpg",
    image: "assets/img/portfolio/plobot.jpeg",
    link: "https://www.kickstarter.com/projects/1365116576/plobot-a-robot-coding-companion",
    linkText: "Kickstarter Campaign",
    description: "Plobot is a fun, educational robot that teaches young learners coding concepts without all the messy syntax – and without any need for computer screens. They will learn about algorithms, loops, conditionals, and more, all while having a blast with their favorite new toy!<br>Command cards are at the core of the Plobot experience, making every interaction tactile and hands-on. Each Command Card represents a block of code. Tap or swipe them on Plobot's head to string them together and create a \"program\" the robot follows - with the \"play\" card as an execute function. The base set lays the building blocks for controlling Plobot, while our expansion sets allow the robot to grow with your child's abilities, creating countless possible combinations!"
  },
  {
    id: "portfolio-2",
    title: "Kreators Kit",
    tags: ["Pcomp", "teaching"],
    thumbnail: "https://cdn.hackaday.io/images/5483351535480768267.JPG",
    image: "https://cdn.hackaday.io/images/5483351535480768267.JPG",
    link: "https://hackaday.io/project/160689-kreators-kit",
    linkText: "Project Link",
    description: "A DIY kit for young creators that makes learning physical computing and robotics accessible and fun, focusing on sensor integration. We had the combined experience of teaching with Arduino for some 15 years among the whole team, but all of us felt frustrated in a way or other by the way hardware was not really connected with the learning journey a beginner would face."
  },
  {
    id: "portfolio-3",
    title: "MakerTV series",
    tags: ["teaching"],
    thumbnail: "assets/img/portfolio/thumbs/cctv.jpg",
    image: "assets/img/portfolio/cctv.jpg",
    link: "https://www.youtube.com/watch?v=xCagvFXqHOY",
    linkText: "Link to Youtube Videos",
    description: "Back in 2014, Shanghai TV featured in their creative spot the platform Multiplo. I also recorded a series of tutorials to explain how to use it to prototype robotics quickly. Beware: it's mostly in Chinese, and I am so nervous that I can barely make sense of myself."
  },
  {
    id: "portfolio-4",
    title: "Swarmesh - a swarm mesh",
    tags: ["robotics"],
    thumbnail: "assets/img/portfolio/thumbs/swarmesh.jpg",
    image: "assets/img/portfolio/swarmesh.jpg",
    link: "https://hackaday.io/project/165119-swarmesh-nyu-shanghai",
    linkText: "Project Link",
    description: "Our project aims to design and build our own scalable swarm robot platform by optimizing a set of criteria, such as cost, programmability, size, and simplicity. Designing a mobile platform that can be scalable to present swarm behaviour faces many challenges that scientists are trying to solve worldwide.<br>By prototyping a different design born from the analysis of other robots, we will evaluate our solution on how it is more effective. This project will benefit future research on swarm robotics since it aims to provide a feature of swarm robot systems with a more straightforward design. Furthermore, we expect the project to be integrated with other fields, such as rescue robots, and medical robots, to provide the advantages of a swarm robot system."
  },
  {
    id: "portfolio-5",
    title: "roboVR",
    tags: ["robotics", "accessibility"],
    thumbnail: "assets/img/portfolio/thumbs/roboVR-thumb.jpg",
    image: "assets/img/portfolio/roboVR-poster-jpg.jpg",
    link: "https://crystalline-watchmaker-2c3.notion.site/VR-x-Robotics-7250ce98e0a648a38ba835e766e56b52?pvs=4",
    linkText: "Read notes",
    description: "This research explores the potential of combining virtual reality (VR) and robotic technologies to create a safe and interactive learning environment for people who are blind and low vision (BLV). The paper presents a case study called roboVR, which integrates motion capture, obstacle avoidance robots, and VR to simulate real-world scenarios for blind and low vision users.<br>The goal is to provide a realistic training environment for individuals to navigate unfamiliar spaces, such as streets or metro stations. The research team utilized OptiTrack cameras and ESP32 robots to capture real-world position data and stream it to Unity for creating the VR environment."
  },
  {
    id: "portfolio-6",
    title: "Perspective: a VR experience about accessiblity",
    tags: ["accessibility"],
    thumbnail: "assets/img/portfolio/thumbs/perspective-thumb.jpg",
    image: "assets/img/portfolio/perspective.jpg",
    link: "https://hackaday.io/project/183459-perspective-a-vr-experience-about-empathy",
    linkText: "Project Link",
    description: "Perspective is an experience to raise awareness and stimulate reflection. As we perceive a day in the life of a person with disabilities, we become aware of the world in a whole new way. We rely on our other senses to help communicate with the world around us.<br>The VR experience is a scenario from the life of Haibin, from his place of work, a blind massage shop. 360 video is taken at 2 locations: 1) greeting a customer at the reception desk and 2) providing a massage to a customer. Both are taken from Haibin’s point of view."
  },
  {
    id: "portfolio-7",
    title: "More accessible computers",
    tags: ["accessibility", "Pcomp"],
    thumbnail: "assets/img/portfolio/thumbs/accessible-thumb.jpg",
    image: "assets/img/portfolio/accessible.jpeg",
    link: "https://ima.shanghai.nyu.edu/projects/faculty-research/making-computers-more-accessible",
    linkText: "Project Link",
    description: "This project investigates the experiences of people with motor impairments with computers and highlight the importance of providing a wider variety of customizable assistive technology offerings. We co-designed solutions with people benefitting from solutions to make their computer interfaces more accessible.<br>The goal of this project was to contribute to the nascent literature that investigates ways to improve the ways that people with mobility impairments can become more productive with their computers. We also researched how the design of the co-design activities can elicit meaningful dialogue and empathy and how incorporating the Jacdac platform can support brainstorming between researchers, designers, and people with motor impairments. The findings of this project were published at the 25th Conference on Computers and Accessibility (ASSETS '23)."
  },
  {
    id: "portfolio-8",
    title: "Koding Kreators",
    tags: ["teaching", "startups"],
    thumbnail: "assets/img/portfolio/thumbs/3dprint.png",
    image: "assets/img/portfolio/3dprint.jpg",
    link: "https://www.youtube.com/watch?v=S2hGLG0Bs_c",
    linkText: "Watch promo video",
    description: "Koding Kreators was a startup focused on STEAM education. I developed content for an immersive STEAM learning experience for children ages 5 to 15. Our camp programs focused on art and technology scaled up to a team of 15 teachers with hundreds of students per summer. We ran activities and workshops that combined coding, robotics, and creative arts to inspire the next generation of makers."
  },
  {
    id: "portfolio-9",
    title: "XAC-pack: a wheelchair interface for Xbox",
    tags: ["accessibility"],
    thumbnail: "assets/img/portfolio/thumbs/XAC.jpg",
    image: "assets/img/portfolio/XAC.jpg",
    link: "#",
    linkText: "Check out the Github Repo",
    description: "Pack for Xbox Adaptive Controller (XAC), to allow Bluetooth wheelchair controllers to play with XBOX. This project was developed for the Children's Hospital Eastern Ontario (CHEO) by volunteers at TETRA SOCIETY. I was in charge of the third iteration of hardware and software, collaborating with occupational therapists, people with disabilities, and XBOX experts."
  },
  {
    id: "portfolio-10",
    title: "Pen-Based Gestures Stylus",
    tags: ["accessibility", "Pcomp"],
    thumbnail: "assets/img/portfolio/thumbs/TEI.jpg",
    image: "assets/img/portfolio/TEI.jpg",
    link: "https://www.youtube.com/watch?v=_npEp0rxVqc",
    linkText: "Watch the full video here",
    description: "As part of my research at the Creative Interactions Lab, we developed different versions of sleeves for a stylus, using a TinyML model customized to the particular movements and body shape of the artists we worked with. (<a href=\"https://drive.google.com/file/d/1Xsc7xSfyh6Wvh8-h4hzTVB4Cp9pZVAi0/view?usp=drive_link\">TEI'26 publication</a>)"
  },
  {
    id: "portfolio-11",
    title: "Digi-Crip Residency 2025",
    tags: ["accessibility"],
    thumbnail: "assets/img/portfolio/thumbs/digicrip.jpg",
    image: "assets/img/portfolio/digicrip.jpg",
    link: "#",
    linkText: "",
    description: "I organized a residency for artists with upper limb motor impairments, to help make true their commitment to developing their careers in creating art with digital media. The residency lasts for three months, while you will develop your own artistic practice."
  },
  {
    id: "portfolio-12",
    title: "Interface Lab",
    tags: ["teaching"],
    thumbnail: "assets/img/portfolio/interface-lab.jpg",
    image: "assets/img/portfolio/interface-lab.jpg",
    link: "https://medium.com/interface-lab/all?topic=tutorial",
    linkText: "Read Online Tutorials",
    description: "A class co-taught with Christian Grewell in 2022 for the Low Residency program for NYU. We explored the intersection of physical and digital interfaces. I designed a series of tutorials to connect Arduino to Unity, using both Serial and wireless communication. <a href='../pdf/InterfaceLab_Syllabus.pdf'>Syllabus here</a>."
  },
  {
    id: "portfolio-13",
    title: "AnyAdapter",
    tags: ["accessibility", "Pcomp"],
    thumbnail: "assets/img/portfolio/anyadapter.png",
    image: "assets/img/portfolio/anyadapter.png",
    link: "assets/pdf/AnyAdapter.pdf",
    linkText: "Read the Paper",
    description: "We worked with students from my class Creating Assistive Technology For many wheelchair users, the need to operate their chair directly conflicts with using a smartphone for critical tasks like navigation and communication. Existing commercial solutions are often unsuitable, leaving a significant accessibility gap. In this article, we describe how we collaboratively designed a custom accessory to solve this need. Our team consisted of engineers, designers, and a wheelchair user. We engaged in an iterative prototyping process, following clear design principles, and utilizing emergent technologies such as 3D printing and physical computing. The result is the AnyAdapter, a motorized, open-source accessory that allows a user to mount and precisely position a smartphone with minimal physical effort."
  },
  {
    id: "portfolio-14",
    title: "Robotics Course",
    tags: ["teaching", "robotics"],
    thumbnail: "https://lh3.googleusercontent.com/pw/AP1GczMnpNMuvRU7F3CfOwM0acOZHgfWRH8TuZ8smhFUFkGUuQYCYOcu5T3ERa9rVHvv295tm3rIbNnOtafst8_51Eb9M8D7X0EEcGozfff0MLDZScgSqLVV4pZWK28HKPViwb4fMR6dh7RrxlHQk0WghBRxUg=w1054-h1404-s-no-gm?authuser=0",
    image: "https://lh3.googleusercontent.com/pw/AP1GczMnpNMuvRU7F3CfOwM0acOZHgfWRH8TuZ8smhFUFkGUuQYCYOcu5T3ERa9rVHvv295tm3rIbNnOtafst8_51Eb9M8D7X0EEcGozfff0MLDZScgSqLVV4pZWK28HKPViwb4fMR6dh7RrxlHQk0WghBRxUg=w1054-h1404-s-no-gm?authuser=0",
    link: "http://rodolfocossovich.com/robot-course/",
    linkText: "View Course",
    description: "A detailed curriculum created for teenagers to explore the fundamentals of robotics through hands-on activities, covering electronics, mechanics, and coding."
  },
  {
    id: "portfolio-15",
    title: "bot5",
    tags: ["robotics", "coding"],
    thumbnail: "assets/img/portfolio/bot5.png",
    image: "assets/img/portfolio/bot5.png",
    link: "https://github.com/todocono/bot5",
    linkText: "View on GitHub",
    description: "An innovative approach to teaching robotics using JavaScript, P5.js, and ML5.js. It simplifies the bridge between web technologies and physical hardware."
  },
  {
    id: "portfolio-16",
    title: "The falling human",
    tags: ["art", "robotics"],
    thumbnail: "assets/img/portfolio/perfectRobot.png",
    image: "assets/img/portfolio/perfectRobot.png",
    link: "https://youtu.be/8DQRyci-9YU",
    linkText: "Watch Thesis Video",
    description: "My MFA thesis project from 2020, exploring the philosophical and aesthetic boundaries of robotic agency and the concept of \"perfection\" in machines."
  },
  {
    id: "portfolio-17",
    title: "Mad Science robot program",
    tags: ["teaching", "robotics"],
    thumbnail: "assets/img/portfolio/madScience-2.png",
    image: "assets/img/portfolio/madScience-2.png",
    link: "https://youtube.com/shorts/RuToT-ROdMg",
    linkText: "Watch Short",
    description: "Engaging educational programs designed for children to experience the wonders of science and robotics through interactive demonstrations."
  },
  {
    id: "portfolio-18",
    title: "Robotario",
    tags: ["robotics", "research"],
    thumbnail: "assets/img/portfolio/robotario2.png",
    image: "assets/img/portfolio/robotario2.png",
    link: "https://youtu.be/c957UJpnLr0",
    linkText: "Watch Video",
    description: "An interactive installation exhibited at the West Bund Museum, experimenting with robotic interactions and swarm behaviors, presented at ICSRA 2020."
  },
  {
    id: "portfolio-19",
    title: "Introduction to Robotics",
    tags: ["teaching", "robotics"],
    thumbnail: "assets/img/portfolio/intro-robo.png",
    image: "assets/img/portfolio/intro-robo.png",
    link: "https://youtu.be/n_9sLtCdOjw",
    linkText: "Watch Video",
    description: "A comprehensive introduction to the world of robotics, covering basic concepts, history, and the future of automated systems."
  },
];
