export type ActorsType = {
  id: number;
  name: string;
  quote: string;
  forWhat: string;
  img: string;
  sound: string;
};
export const data: ActorsType[] = [
  {
    id: 1,
    name: "Walter White",
    quote:
      "Who are you talking to right now? Who is it you think you see? Do you know how much I make a year? I mean, even if I told you, you wouldn't believe it. Do you know what would happen if I suddenly decided to stop going into work? A business big enough that it could be listed on the NASDAQ goes belly up. Disappears. It ceases to exist without me. No, you clearly don't know who you're talking to, so let me clue you in. I am not in danger, Skyler. I am the danger. A guy opens his door and gets shot, and you think that of me? No. I am the one who knocks!",
    forWhat: "Walt's speech to his wife Skyler, explaining who he is.",
    img: "/assets/img/walter-white.webp",
    sound: "/assets/sounds/1.mp3",
  },
  {
    id: 2,
    name: "Jesse Pinkman",
    quote:
      "I am not turning down the money! I'm turning down you! You get it?! I want nothing to do with you! Ever since I met you, everything I ever cared about is gone! Ruined, turned to shit, dead, ever since since I hooked up with the great Heisenberg! I have never been more alone! I have nothing! No one! Alright it's all gone! Get it? No, no no, why? Why would you get it? What do you even care, as long as you get what you want, right? You don't give a shit about me! You said I was no good. I'm nothing! Why would you want me, huh? You said my meth is inferior, right? Right? Hey! You said my cook was garbage! Hey, screw you, man! Screw you!",
    forWhat:
      "Jesse upsettingly yelling at Walter White while in a hospital bed.",
    img: "/assets/img/jesse-pinkman.webp",
    sound: "/assets/sounds/2.mp3",
  },
  {
    id: 3,
    name: "Jimmy McGill",
    quote:
      "Hi. I'm Saul Goodman. Did you know that you have rights? The Constitution says you do, and so do I. I believe that, until proven guilty, every man, woman, and child in this country is innocent. And that's why I fight for you, Albuquerque!",
    forWhat: "Jimmy's famous television commercial as Saul Goodman.",
    img: "/assets/img/jimmy-mcGill.webp",
    sound: "/assets/sounds/3.mp3",
  },
  {
    id: 4,
    name: "Mike Ehrmantraut",
    quote: `I have people. I have people waiting for me. They don't know what I do, they never will. They're protected, but I do what I do so they can have a better life and if I live or if I die it really doesn't make a difference to me as long as they have what they need. So when it's my time to go, I will go knowing I did everything I could for them. Now, you ask me how I keep going? That's how.`,
    forWhat: "Mike to Jimmy McGill on why he does what he does.",
    img: "/assets/img/mike-ehrmantraut.webp",
    sound: "/assets/sounds/4.mp3",
  },
  {
    id: 5,
    name: "Gustavo Fring",
    quote: `What does a man do, Walter? A man provides for his family. (...) When you have children, you always have family. They will always be your priority, your responsibility. And a man... a man provides. And he does it, even when he's not appreciated. Or respected. Or even loved. He simply bears up, and he does it. Because he's a man.`,
    forWhat: "Gustavo Fring manipulates Walter White into working for him.",
    img: "/assets/img/gustavo-fring.webp",
    sound: "/assets/sounds/5.mp3",
  },
  {
    id: 6,
    name: "Hank Schrader",
    quote: `It was you. All along, it was you! You son of a bitch. You drove into traffic to keep me from that laundry. (...) That call I got telling me Marie was in the hospital... that wasn't Pinkman. You had my cell number. You killed ten witnesses to save your sorry ass. You bombed a nursing home. Heisenberg. Heisenberg! You lying, two-face sack of shit.`,
    forWhat:
      "Hank confronting Walter White after finding out he was Heisenberg.",
    img: "/assets/img/hank-schrader.webp",
    sound: "/assets/sounds/6.mp3",
  },
  {
    id: 7,
    name: "Todd Alquist",
    quote: `Just so you know, this isn't personal.`,
    forWhat: "Todd to Andrea before executing her under Jesse's eyes.",
    img: "/assets/img/todd-alquist.webp",
    sound: "/assets/sounds/7.mp3",
  },
  {
    id: 8,
    name: "Skyler White",
    quote: `Someone has to protect this family from the man who protects this family.`,
    forWhat: "Skyler White about her husband.",
    img: "/assets/img/skyler-white.webp",
    sound: "/assets/sounds/8.mp3",
  },
];
