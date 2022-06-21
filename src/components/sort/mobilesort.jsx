import { Sort } from "./sort";
import { AiOutlineClose } from "react-icons/ai";

export const MobileSort = ({ setShowSort }) => {
  return (
    <section className="mobile-sort">
      <div className="mobile-sort-container">
        <AiOutlineClose
          className="close"
          onClick={() => setShowSort((prev) => !prev)}
        />
        <Sort />
      </div>
    </section>
  );
};
