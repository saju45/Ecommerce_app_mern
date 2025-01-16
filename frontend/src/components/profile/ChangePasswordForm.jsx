import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useChangePasswordMutation } from "../../features/auth/authApi";
const ChangePasswordForm = () => {
  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const navigate = useNavigate();
  const [changePassword] = useChangePasswordMutation();

  const handleChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password.newPassword === password.confirmNewPassword) {
        const { data: response } = await changePassword(password);

        toast.success(response.data.message);
        navigate("/login");
      } else {
        toast.error("Passwords do not match");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    } finally {
      setPassword({
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      });
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold">Change accounts password</h1>
      <form action="" className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col mt-4">
          <label className="block text-zinc-600 text-sm font-semibold mb-2">
            Current Pssword
          </label>
          <input
            type="password"
            name="currentPassword"
            className="w-full mt-2 outline-none border px-3 py-2 rounded border-zinc-400"
            placeholder="current password"
            value={password.currentPassword}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col mt-4">
          <label className="block text-zinc-600 text-sm font-semibold mb-2">
            New Pssword
          </label>
          <input
            type="password"
            name="newPassword"
            className="w-full mt-2 outline-none border px-3 py-2 rounded border-zinc-400"
            placeholder="New password"
            value={password.newPassword}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col mt-4">
          <label className="block text-zinc-600 text-sm font-semibold mb-2">
            Confirm new Pssword
          </label>
          <input
            type="password"
            name="confirmNewPassword"
            className="w-full mt-2 outline-none border px-3 py-2 rounded border-zinc-400"
            placeholder="Confirm new password"
            value={password.confirmNewPassword}
            onChange={handleChange}
          />
        </div>
        <div className="flex mt-8 ">
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-600 transition-all duration-200 text-center px-4 py-2 text-white rounded"
          >
            Update Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePasswordForm;
