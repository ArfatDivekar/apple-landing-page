import { iphonebg } from "../assets/images";
import Button from "../components/Button";

const MostlySelled = () => {
  return (
    <section
      id="most-saled"
      className="flex justify-between items-center gap-10 w-full max-container py-0"
    >
      <div className="flex flex-1 flex-col font-poppins">
        <h2 className="text-4xl font-poppins font-bold text-gray-800">
          Most selled
          <span className="text-blue-500"> iPhone </span>
          of 2k23
        </h2>
        <p className="text-[36px] font-bold font-poppins mt-5 lg:max-w-lg text-gray-800">
          iPhone 15 Pro Max{" "}
        </p>
        <p className="font-poppins mt-3 text-[18px] text-slate-500 lg:max-w-lg">
          Available in 6.1-inch and 6.7-inch display sizes,2 iPhone 15 Pro and
          iPhone 15 Pro Max feature a strong and lightweight titanium design a
          first for iPhone. This premium alloy the same used in spacecraft has
          one of the highest strength-to-weight ratios of any metal, making this
          Apple's lightest Pro lineup ever.
        </p>

        <div className="mt-5">
          <Button label="View details" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center rounded-xl">
        <img
          src={iphonebg}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain rounded-3xl"
        />
      </div>
    </section>
  );
};

export default MostlySelled;
