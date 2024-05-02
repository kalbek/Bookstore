const publishingHouses = [
  {
    id: 3,
    name: "Rib Knits",
  },
  {
    id: 4,
    name: "Panne Velvet",
  },
  {
    id: 5,
    name: "Elasticized Fabrics",
  },
  {
    id: 6,
    name: "Dotted Swiss",
  },
  {
    id: 7,
    name: "Double Knit",
  },
];

const PublishingHouse = () => publishingHouses.map((house, index) => (
  <div className={`flex flex-col items-start ${index !== 0 ? "-mt-3" : ""}`} key={0}>
    <div className="flex gap-2 items-center">
      <input
        type="checkbox"
        name=""
        id={house.id}
        className="appearance-none h-5 w-5 rounded-[5px] checked:bg-transparent checked:bg-zinc-600 checked:rounded-[5px] border border-gray-600  "
      />
      <label
        htmlFor={house.id}
        className="text-black cursor-pointer text-xl font-medium"
      >
        {house.name}
      </label>
    </div>
  </div>
));

export default PublishingHouse;
