/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./html/**/*.{html,js}', './newsletter.html'],
    theme: {
        extend: {
            colors: {
                primary: '#f2dae7',
                azul: {
                    claro: '#c5dfff',
                    escuro: '#061e3c',
                    hover: '#1057b0',
                },
            },
            fontFamily: {
                inter: ['Inter'],
                vast: ['Vast Shadow'],
            },
            keyframes: {
                sino_kf: {
                    '0%, 100%': {
                        transform: 'rotate(-10deg)',
                    },
                    '50%': {
                        transform: 'rotate(10deg)',
                    },
                },
            },
            animation: {
                sino: 'sino_kf 0.31s ease-in-out infinite',
            },
        },
    },
    plugins: [],
};
