/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
          extend: {
                  colors: {
                            bottega: {
                                        green: "#479e44",
                                        "green-dark": "#2e7a2c",
                                        "green-deep": "#1f5a1e",
                                        mint: "#edf3eb",
                                        "mint-deep": "#d8e7d3",
                                        red: "#e04635",
                                        "red-dark": "#b6301f",
                                        cream: "#f7f3e7",
                                        ink: "#1a1a1a",
                                        "ink-soft": "#2b2b2b",
                                        muted: "#6b6b6b",
                            },
                  },
                  fontFamily: {
                            display: ['"Helvetica Neue"', "Helvetica", "Arial", "system-ui", "sans-serif"],
                            sans: ['"Helvetica Neue"', "Helvetica", "Arial", "system-ui", "sans-serif"],
                  },
                  boxShadow: {
                            card: "0 10px 40px -10px rgba(47, 82, 43, 0.15)",
                            soft: "0 4px 20px -4px rgba(0, 0, 0, 0.08)",
                  },
          },
    },
    plugins: [],
};
