import { useEffect, useState } from "react";

function LightDarkToggle() {
  const [color, setColor] = useState(() => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const rootElement = document.getElementById("root");
    rootElement.classList.remove("light", "dark");
    rootElement.classList.add(color);
  }, [color]);

  useEffect(() => {
    const theme = window.matchMedia("(prefers-color-scheme: dark)");

    function handleSystemThemeChange(e) {
      setColor(e.matches ? "dark" : "light");
    }

    theme.addEventListener("change", handleSystemThemeChange);
  }, []);

  function handleLightMode() {
    setColor(() => "light");
  }

  function handleDarkMode() {
    setColor(() => "dark");
  }

  return (
    <main className="flex flex-col gap-4">
      <h2
        className={`text-center text-2xl font-bold ${color === "dark" ? "text-white" : "text-black"}`}
      >
        Appearance
      </h2>

      {/* outer modes container */}
      <div className="border-gray-200 rounded-full p-2 ring-2 ring-gray-200">
        {/*inner modes-container */}
        <div className="flex bg-gray-200 p-4 rounded-full justify-around">
          {/* lightMode */}
          <button
            aria-label="lightMode"
            className={
              color === "light"
                ? "scale-130 transition-transform duration-200 ease-in-out text-amber-500"
                : ""
            }
            onClick={handleLightMode}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          </button>

          {/* darkMode */}
          <button
            aria-label="darkMode"
            className={
              color === "dark"
                ? "scale-130 transition-transform duration-200 ease-in-out text-amber-500"
                : ""
            }
            onClick={handleDarkMode}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          </button>
        </div>
      </div>
      {/* statement */}
      <p
        className={`text-center text-sm ${color === "dark" ? "text-white" : "text-black"}`}
      >
        Toggle To Switch Mode
      </p>
    </main>
  );
}

export default LightDarkToggle;
