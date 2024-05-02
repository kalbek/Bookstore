const ViewAll = ({ actionName }) => (
  <div className="cursor-pointer text-xl text-zinc-700 w-fit">
    <p className=" border-b">{actionName}</p>
    <div className="w-full h-[2px] ouline-3 bg-zinc-700">&nbsp;</div>
  </div>
);

export default ViewAll;
