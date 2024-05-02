const Other = () => (
  <div className="flex flex-col items-start -mt-3">
    <div className="flex gap-3 items-center">
      <input
        type="checkbox"
        name=""
        id="other"
        className="appearance-none h-5 w-5 rounded-[5px] checked:bg-transparent checked:bg-zinc-600 checked:rounded-[5px] border border-gray-600  "
      />
      <label
        htmlFor="other"
        className="text-black cursor-pointer text-xl font-medium"
      >
        4+  Stars
      </label>
    </div>
  </div>
);

export default Other;
