const CoverStyle = () => (
  <div className="flex flex-col items-start -mt-3" key={0}>
    <div className="flex flex-col gap-2 items-start">
      <div className="flex gap-2 items-center">
        <input
          type="radio"
          name="coverStyle"
          id="hardcover"
          className="appearance-none h-5 w-5 border border-gray-600 checked:bg-transparent checked:bg-zinc-600 rounded-[15px]"
          // Add checked attribute if this option is selected
          // checked={/* your state or condition here */}
          checked
        />
        <label
          htmlFor="hardcover"
          className="text-black cursor-pointer text-xl font-medium"
        >
          Hardcover
        </label>
      </div>
      <div className="flex gap-2 items-center -mt-2">
        <input
          type="radio"
          name="coverStyle"
          id="softcover"
          className="appearance-none h-5 w-5 border border-gray-600 checked:bg-transparent checked:bg-zinc-600 rounded-[15px]"
          // Add checked attribute if this option is selected
          // checked={/* your state or condition here */}
        />
        <label
          htmlFor="softcover"
          className="text-black cursor-pointer text-xl font-medium"
        >
          Softcover
        </label>
      </div>
    </div>
  </div>
);

export default CoverStyle;
