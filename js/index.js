
var quotes = [
    {
        textQuote: " “Be yourself; everyone else is already taken.” ",
        speaker: "--Oscar Wilde"
    },
    {
        textQuote: " “So many books, so little time.” ",
        speaker: "--Frank Zappa"
    },
    {
        textQuote: " “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ",
        speaker: "--Albert Einstein"
    },
    {
        textQuote: " “A room without books is like a body without a soul.” ",
        speaker: "--Marcus Tullius Cicero"
    },
    {
        textQuote: " “Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” ",
        speaker: "--Bernard M. Baruch"
    },
    {
        textQuote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”  ",
        speaker: "--Dr. Seuss"
    },
    {
        textQuote: " “You only live once, but if you do it right, once is enough.” ",
        speaker: "--Mae West"
    },
    {
        textQuote: " “Be the change that you wish to see in the world.” ",
        speaker: "--Mahatma Gandhi"
    },
    {
        textQuote: " “In three words I can sum up everything I've learned about life: it goes on.” ",
        speaker: "--Robert Frost"
    },
    {
        textQuote: " “If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.” ",
        speaker: "--J.K. Rowling, Harry Potter and the Goblet of Fire"
    },
    {
        textQuote: " “Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend” ",
        speaker: "--Albert Camus"
    },
    {
        textQuote: " “If you tell the truth, you don't have to remember anything.” ",
        speaker: "--Mark Twain"
    },
    {
        textQuote: ' “Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .” ',
        speaker: "--C.S. Lewis, The Four Loves"
    },
    {
        textQuote: " “A friend is someone who knows all about you and still loves you.” ",
        speaker: "--Elbert Hubbard"
    },
    {
        textQuote: " “To live is the rarest thing in the world. Most people exist, that is all.” ",
        speaker: "--Oscar Wilde"
    },
    {
        textQuote: " “Always forgive your enemies; nothing annoys them so much.” ",
        speaker: "--Oscar Wilde"
    },
    {
        textQuote: " “Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.” ",
        speaker: "--Martin Luther King Jr., A Testament of Hope: The Essential Writings"
    },
    {
        textQuote: " “Live as if you were to die tomorrow. Learn as if you were to live forever.” ",
        speaker: "--Mahatma Gandhi"
    },
    {
        textQuote: " “We accept the love we think we deserve.” ",
        speaker: "--Stephen Chbosky, The Perks of Being a Wallflower"
    },
    {
        textQuote: " “Without music, life would be a mistake.” ",
        speaker: "--Friedrich Nietzsche, Twilight of the Idols"
    },
    {
        textQuote: " “I am so clever that sometimes I don't understand a single word of what I am saying.” ",
        speaker: "--Oscar Wilde, The Happy Prince and Other Stories"
    },
    {
        textQuote: " “To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.” ",
        speaker: "--Ralph Waldo Emerson"
    },  
    {
        textQuote: " “It is better to be hated for what you are than to be loved for what you are not.” ",
        speaker: "--Andre Gide, Autumn Leaves"
    },
];

var cartona = "";

function myQuote() {
    num = Math.floor(Math.random() * quotes.length);

    cartona =
        `
            <p>${quotes[num].textQuote}</p>
            <p>${quotes[num].speaker}</p>

        `


        document.getElementById("randQuote").innerHTML = cartona;
};



 