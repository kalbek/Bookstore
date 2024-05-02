const LanguageList = [
  {
    name: "English",
    id: 0,
  },
  {
    name: "Russian",
    id: 1,
  },
  {
    name: "Azerbaijani",
    id: 2,
  },
];

const Languages = () => LanguageList.map((language) => (
  <div className="flex flex-col -mt-2 items-start" key={0}>
    <div className="flex gap-2 items-center">
      <input
        type="checkbox"
        name=""
        id={language.id}
        className="appearance-none h-6 w-6 rounded-1 checked:bg-transparent checked:bg-zinc-600 checked:rounded-[5px] border border-gray-600  "
      />
      <label
        htmlFor={language.id}
        className="text-black cursor-pointer text-xl font-medium"
      >
        {language.name}
      </label>
    </div>
  </div>
));

export default Languages;
