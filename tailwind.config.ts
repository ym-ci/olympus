import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-satoshi)", ...fontFamily.sans],
        satoshi: ["var(--font-satoshi)", ...fontFamily.sans],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "var(--background)",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        primary: {
          DEFAULT: "var(--portage-400)",
          "50": "var(--portage-50)",
          "100": "var(--portage-100)",
          "200": "var(--portage-200)",
          "300": "var(--portage-300)",
          "400": "var(--portage-400)",
          "500": "var(--portage-500)",
          "600": "var(--portage-600)",
          "700": "var(--portage-700)",
          "800": "var(--portage-800)",
          "900": "var(--portage-900)",
          "950": "var(--portage-950)",
        },
        secondary: {
          DEFAULT: "var(--lavender-pink-300)",
          "50": "var(--lavender-pink-50)",
          "100": "var(--lavender-pink-100)",
          "200": "var(--lavender-pink-200)",
          "300": "var(--lavender-pink-300)",
          "400": "var(--lavender-pink-400)",
          "500": "var(--lavender-pink-500)",
          "600": "var(--lavender-pink-600)",
          "700": "var(--lavender-pink-700)",
          "800": "var(--lavender-pink-800)",
          "900": "var(--lavender-pink-900)",
          "950": "var(--lavender-pink-950)",
        },
        tertiary: {
          DEFAULT: "var(--cruise-200)",
          "50": "var(--cruise-50)",
          "100": "var(--cruise-100)",
          "200": "var(--cruise-200)",
          "300": "var(--cruise-300)",
          "400": "var(--cruise-400)",
          "500": "var(--cruise-500)",
          "600": "var(--cruise-600)",
          "700": "var(--cruise-700)",
          "800": "var(--cruise-800)",
          "900": "var(--cruise-900)",
          "950": "var(--cruise-950)",
        },
        "primary-darker": "hsl(var(--primary-darker))",
        "secondary-darker": "hsl(var(--secondary-darker))",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
