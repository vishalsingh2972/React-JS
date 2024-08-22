import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
      <form>
        <input
          type="text"
          className=" border border-black p-2 m-2"
          placeholder="Name"
        />
        <input
          type="text"
          className=" border border-black p-2 m-2"
          placeholder="Message"
        />
        <Link to="/">
          <button className=" border border-black p-2 m-2 bg-gray-100 rounded-lg">
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
};
export default Contact;