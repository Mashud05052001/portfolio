"use client";

import { useState, useEffect } from "react";

const useFullUrl = () => {
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(window.location.href);

      const handleHashChange = () => {
        setUrl(window.location.href);
      };

      window.addEventListener("hashchange", handleHashChange);
      return () => {
        window.removeEventListener("hashchange", handleHashChange);
      };
    }
  }, []);

  return url;
};

export default useFullUrl;
