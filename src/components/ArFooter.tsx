import React from "react";

export const ArFooter = () => {
  return (
    <footer className="bg-gray-50 py-6 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm text-gray-600" dir="rtl">
            ✨ Powered by{" "}
            <a
              href="https://obada.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 hover:text-sky-700 font-medium transition-colors duration-200 hover:underline"
            >
              Obada 
            </a>{" "} 
            Magic ✨
          </p>
        </div>
      </div>
    </footer>
  );
};
