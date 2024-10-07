import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Title = ({title}) => {
  const navigate = useNavigate();
  return (
    <div className="mt-5">
      <h2 className="text-2xl font-semibold text-slate-500 mb-5 flex items-center gap-2">
        <IoMdArrowRoundBack
          className="hover:cursor-pointer"
          onClick={() => navigate(-1)}
        />
        {title}
      </h2>
    </div>
  );
};

export default Title;
