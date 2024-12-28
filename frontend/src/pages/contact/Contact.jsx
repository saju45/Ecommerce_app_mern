import { FaClock, FaEnvelope, FaMap } from "react-icons/fa";
import ContactForm from "../../components/contact/ContactForm";
import Newsletter from "../../components/home/NewsLetter";

const Contact = () => {
  return (
    <div>
      <div
        id="page-header"
        className="bg-[url('/images/about/banner.png')] bg-cover bg-no-repeat w-full h-[45vh] flex justify-center items-center text-center flex-col p-4"
      >
        <h2 className="text-white text-3xl font-bold">#let's_talk</h2>
        <p className="text-white text-lg mt-2">
          LEAVE A MESSAGE, We love to hear form yo
        </p>
      </div>
      <div
        id="contact_details"
        className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-10 px-10 md:px-20 mt-10"
      >
        <div className="text-black w-full md:w-2/5 ">
          <span>GET IN TOUCH</span>
          <h2 className="mt-5 text-2xl text-black font-semibold">
            visit on of our agency locations or contact us today
          </h2>
          <h3 className="text-black mt-2 font-bold">Head Office</h3>

          <div>
            <li className="flex items-center py-2.5">
              <FaMap className="mr-5" />
              <p className="text-sm m-0 text-gray-500">
                kdc road lalbag. Rangpur Bangladesh{" "}
              </p>
            </li>

            <li className="flex items-center py-2.5">
              <FaEnvelope className="mr-5" />
              <p className="text-sm text-gray-500 m-0">contact@example.com </p>
            </li>

            <li className="flex items-center py-2.5">
              <FaClock className="mr-5" />
              <p className="text-sm text-gray-500 m-0">
                Monday to saturday 9:00 to 5:00{" "}
              </p>
            </li>
          </div>
        </div>

        <div className="w-full md:w-3/5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d134622.43736636147!2d89.17875276925925!3d25.744766665700443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e32de6fca6019b%3A0x9fa496e687f818c8!2sRangpur!5e0!3m2!1sen!2sbd!4v1735317400327!5m2!1sen!2sbd"
            style={{ border: 0 }}
            allowFullScreen=""
            className="h-[300px] md:h-[420px] w-[100%] md:w-[700px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <ContactForm />
      <Newsletter />
    </div>
  );
};

export default Contact;
