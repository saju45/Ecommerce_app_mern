import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [field, setField] = useState("");
  const [loading, setLoading] = useState(false);

  const backendLink = useSelector((state) => state.prod.link);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const response = await axios.post(
        `${backendLink}/email/sendEmail`,
        {
          to: email,
          subject: subject,
          message: field,
        },
        { withCredentials: true }
      );

      setLoading(false);
      toast.success(response.data.message);
      setName("");
      setEmail("");
      setSubject("");
      setField("");
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.error);
      setLoading(false);
    }
  };
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between m-8 px-5 md:p-20 border border-gray-300">
        <div className=" w-[100%] md:w-2/3 flex flex-col items-star mt-5">
          <p>LEAVE A MESSAGE</p>
          <h1>We love to heard form you</h1>
          <form
            className="w-[100%]  flex flex-col items-start mt-4"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="w-[100%] p-1.5 md:p-3 mb-5 outline-none border border-[#088178]"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              className="w-full p-1.5 md:p-3 mb-5 outline-none border border-[#088178]"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              className="w-full p-1.5 md:p-3 mb-5 outline-none border border-[#088178]"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <textarea
              className="w-full p-3 mb-5 outline-none border border-[#088178]"
              placeholder="Textarea field"
              value={field}
              onChange={(e) => setField(e.target.value)}
              required
            ></textarea>
            {loading ? (
              <button className="bg-[#088178] text-white py-2 px-4 rounded">
                submiting...
              </button>
            ) : (
              <button
                type="submit"
                className="bg-[#088178] text-white py-2 px-4 rounded"
              >
                submit
              </button>
            )}
          </form>
        </div>

        <div className="flex flex-col   items-start space-y-6 mt-6">
          <div className="flex items-start pb-6">
            <img
              src="/images/people/1.png"
              alt="Person"
              className="w-16 h-16 object-cover mr-4"
            />
            <p className="m-0 text-sm leading-6">
              <span className="block text-lg font-semibold text-black">
                John Doe
              </span>{" "}
              Senior Market Manager <br /> Phone : 018564625 <br /> Email :
              johndoe@gmail.com
            </p>
          </div>
          <div className="flex items-start pb-6">
            <img
              src="/images/people/2.png"
              alt="Person"
              className="w-16 h-16 object-cover mr-4"
            />
            <p className="m-0 text-sm leading-6">
              <span className="block text-lg font-semibold text-black">
                William Smith
              </span>{" "}
              Senior Market Manager <br /> Phone : 018564625 <br /> Email :
              johndoe@gmail.com
            </p>
          </div>
          <div className="flex items-start pb-6">
            <img
              src="/images/people/3.png"
              alt="Person"
              className="w-16 h-16 object-cover mr-4"
            />
            <p className="m-0 text-sm leading-6">
              <span className="block text-lg font-semibold text-black">
                Emma stone
              </span>{" "}
              Senior Market Manager <br /> Phone : 018564625 <br /> Email :
              johndoe@gmail.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
