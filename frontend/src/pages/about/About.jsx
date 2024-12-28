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
        <h2 className="text-white text-3xl font-bold">#KnowsUs</h2>
        <p className="text-white text-lg">Lorem ipsum dolor sit amet.</p>
      </div>

      {/* About Head Section */}
      <div className="flex flex-col md:flex-row items-center px-10 md:px-20 py-8">
        <img
          src="/images/about/a6.jpg"
          alt="About Us"
          className="w-full md:w-1/2 h-auto"
        />
        <div className="md:pl-10">
          <h1 className="text-4xl font-semibold py-4"> Who we are?</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            tempora dolorum? Laudantium cumque in quod ducimus nisi autem
            blanditiis totam. Corrupti vero nam facilis quas dignissimos soluta
            quisquam alias distinctio, nesciunt, neque voluptate amet harum?
            Iure doloremque voluptas dolorem possimus velit eligendi ex beatae
            mollitia pariatur, incidunt placeat, libero amet. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Rerum mollitia ipsa nobis,
            placeat saepe repellat fuga.
          </p>
          <marquee
            bgColor="#ccc"
            loop="-1"
            scrollamount="5"
            widt="100%"
            className="mt-3"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            repellendus. Porro saepe animi earum deleniti, magni pariatur
            sapiente enim dicta.
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
