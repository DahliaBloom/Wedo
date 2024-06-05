<script>
    import {onMount} from 'svelte'
    import penguins from '$lib/images/penguins.png'

    const sentences = [
        "You are stronger than you think 💪",
        "Believe in yourself, always 🌟",
        "Your smile lights up my world 😊",
        "Keep pushing, you got this 🚀",
        "Dream big and never give up 🌈",
        "You are capable of amazing things ✨",
        "Stay positive, work hard, make it happen 💼",
        "Your determination inspires me 🔥",
        "You are beautiful inside and out 🌸",
        "Keep shining bright, my love 🌞",
        "You are a warrior, never forget that 🛡️",
        "Stay focused and never lose sight 🎯",
        "You make the impossible, possible 🌠",
        "I believe in you more than anything 🥇",
        "Keep going, even when it gets tough 🌄",
        "You are my sunshine on a cloudy day ☀️",
        "Every challenge you face makes you stronger 🏋️",
        "You are a true inspiration 💖",
        "Stay brave and take that leap 🌌",
        "You are the author of your own story 📖",
        "Never stop chasing your dreams 🏃‍♀️",
        "You have the power to create change ⚡",
        "You are unstoppable, my love 🚀",
        "Keep your head up, gorgeous 🌹",
        "You make a difference every day 🌏",
        "Your courage is admirable 🦁",
        "Stay true to yourself, always 🌷",
        "You are loved beyond measure ❤️",
        "Believe in your journey 🌍",
        "You are destined for greatness 🌟",
        "Keep your spirit high and your heart strong 💪",
        "You light up every room you enter 💡",
        "Stay motivated and keep moving forward ⏩",
        "You have a heart of gold 💛",
        "Keep striving for excellence 🏆",
        "You are my everything 🌎",
        "Your hard work pays off 🏅",
        "You are a gem, never forget that 💎",
        "Stay fearless and follow your dreams 🦅",
        "You are more powerful than you realize 🌋",
        "Keep believing in yourself, beautiful 🌸",
        "You make the world a better place 🌟",
        "Stay strong and stay true 💪",
        "You are my inspiration every day 🌞",
        "Keep your dreams alive 💤",
        "You are a miracle in my life 🌈",
        "Stay focused and achieve greatness 🏆",
        "You are my guiding star 🌟",
        "Keep pushing forward, no matter what 🚀",
        "You are the best thing that happened to me 💖"
    ]
    let motivationalSentence = ''

    function getRandomSentence() {
        const randomIndex = Math.floor(Math.random() * sentences.length);
        return sentences[randomIndex];
    }

    onMount(() => {
        motivationalSentence = getRandomSentence();
    });
</script>

<div class="fixed w-1/2 bottom-2 right-2">
    <img src={penguins} alt="">
    <p class="absolute top-[0.9rem] left-4 w-[10.5rem] h-[2.8rem] text-center text-sm">{motivationalSentence}</p>
</div>