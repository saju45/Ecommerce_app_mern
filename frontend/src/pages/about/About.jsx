import Feature from "../../components/home/Feature";
import Newsletter from "../../components/home/NewsLetter";

/* eslint-disable react/no-unknown-property */
const About = () => {
  return (
    <div>
      {/* Page Header */}
      <div
        id="page-header"
        className="bg-[url('/images/about/banner.png')] bg-cover bg-no-repeat w-full h-[45vh] flex justify-center items-center text-center flex-col p-4"
      >
        <h2 className="text-white text-3xl font-bold">#Developer</h2>
        <p className="text-white text-lg">Shanawaj hossain saju.</p>
      </div>

      {/* About Head Section */}
      <div className="flex flex-col md:flex-row items-center px-10 md:px-20 py-8">
        <img
          src="/images/about/a6.jpg"
          alt="About Us"
          className="w-full md:w-1/2 h-auto"
        />
        <div className="md:pl-10">
          <h1 className="text-4xl font-semibold py-4">
            {" "}
            Shanawaj hossain saju
          </h1>
          <p className="text-gray-600">
            Hello, my name is Shanawaj hossain saju, and I’m a full stack
            developer. With 1 years of experience in web development, I have a
            strong command over both front-end and back-end technologies,
            allowing me to build complete and scalable applications. On the
            front-end side, I specialize in HTML, CSS, tailwindcss, and
            JavaScript frameworks such as React. I’m passionate about creating
            intuitive user interfaces that provide an exceptional user
            experience. I pay great attention to detail, ensuring that the
            websites or applications I develop are responsive, visually
            appealing, and accessible across different devices and browsers.
            Moving to the back end, I’m proficient in server-side language
            Node.js. I have extensive experience working with databases such as
            MySQL and MongoDB, and I can design efficient database structures
            and write optimized queries. I’m familiar with RESTful APIs and know
            how to integrate them into applications to enable seamless
            communication between the front end and back end. Additionally, I
            have expertise in version control systems like Git. I enjoy staying
            up to date with the latest trends and technologies in the web
            development world, as it allows me to continually improve my skills
            and deliver cutting-edge solutions. Throughout my career, I’ve had
            the opportunity to work on various projects, ranging from small
            startups to large-scale enterprise applications. I thrive in dynamic
            environments where I can tackle challenges, collaborate with
            cross-functional teams, and deliver high-quality solutions that meet
            both user requirements and business objectives. I’m excited to be
            part of a team where I can contribute my full stack development
            skills and help create innovative and impactful applications. Thank
            you for considering me, and I look forward to discussing how I can
            contribute to your organisation
          </p>
          <marquee
            bgColor="#ccc"
            loop="-1"
            scrollamount="5"
            widt="100%"
            className="mt-3 text-white bg-black"
          >
            mern stack web and android developer
          </marquee>
        </div>
      </div>

      {/* About App Section */}
      <div className="text-center mt-10 mb-10">
        <h1 className="text-5xl font-bold text-black">
          Download Our <span className="text-pink-400 underline">App</span>
        </h1>
        <div className="w-[70%] h-full mx-auto mt-8">
          <video
            src="/images/about/1.mp4"
            controls
            className="w-full h-full rounded-2xl"
          ></video>
        </div>
      </div>
      <Feature />
      <Newsletter />
    </div>
  );
};

export default About;
