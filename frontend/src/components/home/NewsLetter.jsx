import { useNavigate } from "react-router-dom";
const Newsletter = () => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col md:flex-row justify-between items-center flex-wrap bg-cover bg-no-repeat bg-[#041e42] p-5"
      style={{
        backgroundImage: `url("images/banner/b14.png")`,
        backgroundPosition: "20% 30%",
      }}
    >
      {/* Newsletter Text */}
      <div className=" w-[100%] md:w-[50%]">
        <h4 className="text-white text-[22px] font-bold">Stay Updated</h4>
        <p className="text-[#818ea0] text-[14px] font-semibold mt-2">
          Sign up for our newsletter and get exclusive deals.{" "}
          <span className="text-[#ffbd27]">Limited Offers!</span>
        </p>
      </div>

      {/* Newsletter Form */}
      <div className="form flex w-[70%] md:w-[40%]  mt-5 md:mt-0">
        <input
          type="email"
          placeholder="Enter your email"
          className="h-[3.125rem] px-5 text-[14px] w-full border border-transparent rounded-l-md outline-none"
        />
        <button
          className="bg-[#088178] text-white px-6 h-[3.125rem] whitespace-nowrap rounded-r-md"
          onClick={() => navigate("/signup")}
        >
          signup
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
