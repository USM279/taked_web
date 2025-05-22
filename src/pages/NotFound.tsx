import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          الصفحة غير موجودة / Page not found
        </p>
        <div className="space-x-4">
          <Link
            to="/ar"
            className="bg-sky-950 text-white px-6 py-3 rounded-lg hover:bg-sky-800 transition inline-block"
          >
            الصفحة الرئيسية
          </Link>
          <Link
            to="/en"
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition inline-block"
          >
            Home Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
