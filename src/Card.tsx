

import { Card } from "flowbite-react";

import { Carousel } from "flowbite-react";
export function Cardt() {
  return (
    <>

      <Card className="w-screen bg-gray-100 relative p-8 mt-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-10">
            <h1 className="mb-1 text-2xl font-semibold text-gray-900 dark:text-white">Jana Harb</h1>
            <span className="text-b text-gray-500 dark:text-gray-400">AI & Data Scientist</span>

            <div className="mt-6">
              <a
                href="#"
                className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel pauseOnHover>
              <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
              <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
              <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
              <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
              <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
            </Carousel>
          </div>
        </div>
      </Card>
    </>
  );
}

