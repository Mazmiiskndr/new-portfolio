import React from "react";
import "@/styles/loading.css"; // Pastikan untuk mengimpor CSS kustom

const Loading = () => {
  return (
    <div className="preloader">
      <div className="loader"></div>
    </div>
  );
};

export default Loading;
