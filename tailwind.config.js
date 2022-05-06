module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{react,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                blue: "#0061A8",
                orange: "#FF8C32"

            },
            width: {
                container_width: "85%"
            },
            height: {
                height: "450px"
            }


        },
    },
    plugins: [],
}