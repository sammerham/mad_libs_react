/**
 * An object with data about all stories
 * type: {id, title, prompts, generate(prompts)}
 */

export default {
  stories: {
    Park: {
      id: "Park",
      title: "Trip to the Park",
      prompts: { name: "", adj: "", verb: "", noun: "" },
      generate: ({ name, adj, verb, noun }) =>
        `Yesterday, ${name} and I went to the park. On our way to the ${adj} park, we saw a ${adj} ${noun} on a bike. We also saw big ${adj} 
          balloons tied to a ${noun}. Once we got to the ${adj} park, the sky tuened ${adj}. It started to ${verb} and ${verb}. ${name} and I 
          ${verb} all the way home. Tomorrow we will try to go to the ${adj} park again and hope it doesn't ${verb}.`
    },
    Visit: {
      id: "Visit",
      title: "The Family Visit!",
      prompts: { name: "", color: "", adj: "", verb: "", noun: "", nouns: "", nouns:""},
      generate: ({ name, color, adj, verb, noun, vegetable, nouns}) =>
        `We are having a perfectly ${adj} time this afternoon in the ${adj} home of ${name}. The rooms are decorated with ${nouns} for the holidays.
        We will feast on ${noun} and corn on the ${noun}. After the big feast we will ${verb} alot of ${vegetable} pie and ${color} cake. Everyone retreats to the ${adj}
        sofa to watch ${noun}.`,
    },
    NewYear: {
      id: "NewYear",
      title: "Happy New Year!",
      prompts: { name: "", adj: "", verb: "", noun: "", number: "", nouns: "" },
      generate: ({ name, adj, verb, noun, number, nouns }) =>
        `At the end of December, my parents let me ${verb} yp late to ${verb} the ${adj} year. We ${verb}${adj} gmaes and snack on ${nouns} and ${adj}
        ${nouns}. Just before midnight, we ${verb} down from ${number} until it's time to ${verb}, noisemakers and ${verb} each other ${adj}
        wishes before the coming year. It's hard to ${verb} to slepp after all of that ${adj} dun!`,
    },
    Halloween: {
      id: "Halloween",
      title: "Halloween",
      prompts: { Holiday: "", adj: "", place: "", noun: "", person:"", food:"", nouns:"", verb:""},
      generate: ({ Holiday, adj, place, noun, person, food, nouns, verb}) =>
        `I can't believe it's already ${Holiday}! I can't wait to put on my ${noun} and visit every ${place}
         in my neighborhood. This year, I am going to dress up as (a) ${person} with ${adj}. Before I ${verb} I make sure to grab 
         my ${adj} ${noun} to hold all of ${food}. Finally, all of my ${nouns} are ready to go!`,
    },
  },
};
