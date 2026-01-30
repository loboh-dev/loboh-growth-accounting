import { useEffect } from "react";
import logoDark from "@/assets/logo-dark.svg";

export default function Formulario() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/embed/43715036.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

   return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-4xl px-6 py-16">
        
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <img
            src={logoDark}
            alt="Company logo"
            className="h-12 md:h-16"
          />
        </div>

        {/* HubSpot form */}
        <div
          className="hs-form-frame"
          data-region="na1"
          data-form-id="ae17e18c-b8b3-4638-b642-4b27edff2db3"
          data-portal-id="43715036"
        />
      </div>
    </div>
  );
}