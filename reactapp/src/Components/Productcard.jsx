import React from "react";

function Productcard({thumbnail,title,price}) {
   return (
    <div className="flex flex-col h-full bg-white border border-gray-200 rounded-2xl shadow-sm transition-all hover:shadow-lg dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
      
      <div className="relative aspect-square w-full overflow-hidden bg-gray-100 dark:bg-gray-700 flex items-center justify-center p-4">
        <img
          className="h-full object-contain mix-blend-multiply dark:mix-blend-normal"
          src={thumbnail}
          alt={title}
        />
      </div>

      <div className="flex flex-col p-5 space-y-3 flex-grow">
        
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2 min-h-[56px] flex-grow">
          {title}
        </h3>
        
        <div className="flex items-center justify-between gap-4 pt-3 border-t border-gray-100 dark:border-gray-700">
          <p className="text-xl font-extrabold text-gray-900 dark:text-white">
            ${price.toFixed(2)}
          </p>
          <button className="text-sm font-semibold text-white bg-blue-700 px-4 py-2 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors">
            View
          </button>
        </div>
      </div>
    </div>
  );
}

export default Productcard;