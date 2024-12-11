"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const CookieConsent = () => {
  useEffect(() => {
    const cookieBotWrapper = document.getElementById("CookiebotWrapper");
    if (cookieBotWrapper) {
      const script = document.createElement("script");
      script.id = "CookieDeclaration";
      script.type = "text/javascript";
      script.async = true;
      script.src =
        "https://consent.cookiebot.com/49855138-eae1-4f45-af19-aa3cde671bfdcd.js";

      cookieBotWrapper.appendChild(script);
    }
  }, []);

  return <div id="CookiebotWrapper" className="container m-auto mt-28"></div>;
};

export default CookieConsent;
