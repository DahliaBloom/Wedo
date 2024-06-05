/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte}'],
    theme: {
        extend: {},
    },
    plugins: [require('daisyui'),],
    daisyui: {
        themes: [{
            theme: {
                "primary": "#BFD1CB", // Gentle Seasalts
                "secondary": "#AFC0B2", // Gentle Surf Spray
                "accent": "#A9C4B5", // Gentle Desert Sage
                "neutral": "#848681", // Gentle Witcher
                "base-100": "#EEE2D4", // Monte
                "info": "#9FB1A9", // Gentle Sage
                "success": "#B2CBB8", // Gentle Eucalyptus
                "warning": "#DCD9C4", // Gentle Seasalts for warning
                "error": "#5B786F", // Gentle Sagebrush
                "base-content": "#4A4A4A", // Lighter primary text color
                "secondary-content": "#7A7A7A", // Slightly lighter secondary text color
            },
        }],
    },
}

