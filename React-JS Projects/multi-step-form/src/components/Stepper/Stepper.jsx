export const Stepper = () => {
  const displaySteps = (
    <div className="flex w-full items-center">
      <div className="flex flex-col relative text-teal-600 items-center">
        <div className="rounded-full h-12 w-12 border-gray-300 border-2 flex items-center justify-center transition duration-500 ease-in-out py-3"></div>
        <div className="absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase">
          Description
        </div>
      </div>
      {/* Line */}
      <div className="flex-auto border-t-2 transition duration-500 ease-in-out"></div>
    </div>
  );
  return (
    <div className="mx-4 p-4 flex justify-between items-center">
      {displaySteps}
    </div>
  );
};
