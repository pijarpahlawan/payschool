import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            container: {
                center: true,
            },
            fontFamily: {
                montserrat: ["Montserrat", "sans-serif"],
            },
            colors: {
                primary: "#E2EAFC",
                secondary: "#0A2472",
                btn: "#0E6BA8",
            },
        },
    },

    plugins: [forms],
};
