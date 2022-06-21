import { useNote } from "context";

export const Sort = () => {
  const { noteArrayDispatch } = useNote();

  return (
    <>
      <h2 className="heading">Sort By Time</h2>
      <label className="sort">
        <input
          className="cursor-pointer"
          type="radio"
          name="sort"
          onClick={() =>
            noteArrayDispatch({ type: "SORT_BY_TIME", payload: "Latest" })
          }
        />{" "}
        Latest
      </label>
      <label className="sort">
        <input
          className="cursor-pointer"
          type="radio"
          name="sort"
          onClick={() =>
            noteArrayDispatch({ type: "SORT_BY_TIME", payload: "Old" })
          }
        />{" "}
        Old
      </label>
    </>
  );
};
