export const Skeleton = () => {
  return (
    <div className="flex justify-center mt-56 ">
      <div
        role="status"
        className="max-w-xl p-4 w-full  space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
      >
        <div className="flex max-w-xl  items-center justify-between">
          <div>
            <div className="h-6 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-5.5"></div>
            <div className="  mt-2 w-102 h-5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
          <div className="h-6 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
        </div>
        <div className="flex items-center justify-between pt-4">
          <div>
            <div className="h-6 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-6"></div>
            <div className=" mt-2 w-102 h-5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
          <div className="h-6 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
        </div>
        <div className="flex items-center justify-between pt-4">
          <div>
            <div className="h-6 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-6"></div>
            <div className=" mt-2 w-102 h-5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
          <div className="h-6 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
        </div>
        <div className="flex items-center justify-between pt-4">
          <div>
            <div className="h-6 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-6"></div>
            <div className=" mt-2 w-102 h-5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
          <div className="h-6 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
        </div>
        <div className="flex items-center justify-between pt-4">
          <div>
            <div className="h-6 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-6"></div>
            <div className=" mt-2 w-102 h-5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
          <div className="h-6 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
