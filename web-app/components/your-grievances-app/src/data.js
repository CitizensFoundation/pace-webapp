
const createRandomData = (length) => {
  return new Array(length).fill().map((a, i) =>  Math.round( Math.random()*(Math.random()*10) * 10 ) / 10).sort();
}

export const DataLabels = [
  "03/2014", "04/2014","07/2014","08/2014","09/2014","10/2014","11/2014","12/2014",
  "01/2015", "02/2015","03/2015", "04/2015","05/2015","06/2015","07/2015","08/2015","09/2015","10/2015","11/2015","12/2015",
  "01/2016", "02/2016","03/2016", "04/2016","05/2016","06/2016","07/2016","08/2016","09/2016","10/2016","11/2016","12/2016",
  "01/2017", "02/2017","03/2017", "04/2017","05/2017","06/2017","07/2017","08/2017","09/2017","10/2017","11/2017","12/2017",
  "01/2018", "02/2018","03/2018", "04/2018","05/2018","06/2018","07/2018","08/2018","09/2018","10/2018","11/2018","12/2018",
  "01/2019", "02/2019","03/2019", "04/2019","05/2019","06/2019","07/2019","08/2019","09/2019","10/2019","11/2019","12/2019"
]

export const Data = [
  {
    currrentCount: createRandomData(DataLabels.length)[0],
    title: "Left Behind by Global Economy",
    topicName: "Left behind",
    description: "Decades of increased globalization lifted hundreds of millions of people out of property and more than doubled the real wealth of the top 1%; unfortunately these gains were not shared by the middle class in the First World, who saw their wealth stagnant or in decline.",
    quote: "Voters in the UK were voting against free markets and free labour, against winner takes all capitalism that pits worker against worker; marginalised against marginalised. It’s the outcome of years of austerity that saw people jobless, threatened and insecure. As economist Dani Rodrik put it succinctly “Less skilled workers in advanced countries haven’t done very well out of globalisation.",
    dataSet: {
      data: createRandomData(DataLabels.length),
      label: "Left Behind",
      borderColor: "#3e95cd",
      fill: false
    }
  },
  {
    currrentCount: createRandomData(DataLabels.length)[0],
    title: "Disintegration of Traditional Family Unit",
    topicName: "Family disintegration",
    description: "Declining rates of marriage, rising divorce rates, stagnant wages requiring both parents to work full time, growth of childcare as an employment sector -- all add up to anxiety and sense of loss for those who believe in traditional family unit as building block of society.",
    quote: "Despite its widespread social acceptance of single mothers, children who grow up without fathers suffer a host of social, emotional and psychological problems: crime, drugs, promiscuity, teen pregnancy, suicide, and dropouts. That’s not to say single mothers aren’t doing their best; it’s merely to say there’s only so much they can do.",
    dataSet: {
      data: createRandomData(DataLabels.length),
      label: "Family Disintegration",
      borderColor: "#8e5ea2",
      fill: false
    }
  },
  {
    currrentCount: createRandomData(DataLabels.length)[0],
    title: "Loss of Religion as Social Organizing Force",
    topicName: "Loss of religion",
    description: "Though numbers of actual self identified atheists and agnostics remain in single digits, the percentage of people who identify as “unaffiliated” and do not attend church has more than doubled in the last 20 years. Western culture no longer embraces a religious approach to morality and ethics.",
    quote: "This past year has seen the continuation of high-profile attacks on religious liberty in the public arena as people of faith have been fired, refused employment, or fined for practicing their faith or speaking out about their religious beliefs,” it continued. The report noted that the number of attacks is likely much higher than what has been documented. What we collect is just what's published. So really it is just the tip of the iceberg because what's published is really a fraction of what is actually happening.",
    dataSet: {
      data: createRandomData(DataLabels.length),
      label: "Loss of Religion",
      borderColor: "#3cba9f",
      fill: false
    }
  },
  {
    currrentCount: createRandomData(DataLabels.length)[0],
    title: "Choice of Conspiracy over Dominant Culture",
    topicName: "Technology and alienation",
    description: "Alienated by social complexity, technology, entertainment, and revisionist history, many populist voices urge the rejection of the official narrative of history and the dominant culture, from politicians to alt-right media and grass roots social media. Needing an alternative to the official narrative, conspiracy theorists eagerly fill the gap.",
    quote: "The deepening gulf between public and scientific viewpoints lies behind some of the most visible clashes in society, from the blanket rejection of genetically modified organisms, the growth of anti-vaccine campaigns, confrontations between scientists and Creationists, and the dismissal of climate change research.",
    dataSet: {
      data: createRandomData(DataLabels.length),
      label: "Alienated by Technology",
      borderColor: "#c45850",
      fill: false
    }
  },
  {
    currrentCount: createRandomData(DataLabels.length)[0],
    title: "Uncomfortable with Evolving Social Mores and Emerging Language",
    topicName: "Evolving social mores",
    description: "Engagement with liberal ideas like feminisim, LGBTQ identity, and racial equality, through academic or media exposure, has challenged some citizens’ core beliefs about behavior and entitlement, in a way that creates angry pushback, deep suspicion and contempt for modern society.",
    quote: "There is a salutary lesson here: in democratic societies at least, denialism cannot be beaten legally, or through debunking, or through attempts to discredit its proponents. That’s because, for denialists, the existence of denialism is itself a triumph. Central to denialism is an argument that “the truth” has been suppressed by its enemies. To continue to exist is a heroic act, a victory for the forces of truth.",
    dataSet: {
      data: createRandomData(DataLabels.length),
      label: "Evolving Social Mores",
      borderColor: "#e8c309",
      fill: false
    }
  },
  {
    currrentCount: createRandomData(DataLabels.length)[0],
    title: "Fear of Losing Cultural Identity/Ethnic Solidarity/Hegemony",
    topicName: "Losing cultural identity",
    description: "As birthrates in the developed world drop below replacement rate, and immigration becomes a driver of electoral demographics, those members of the original regional ethnic group in that country feel their culture, language and values profoundly threatened.",
    quote: "European countries have regarded themselves as more progressive than the home countries of their Middle Eastern immigrants, due in part to their secular orientation. They claim to be more progressive than Islamic countries on women’s rights and civil rights. Muslim minorities living in the West are expected to integrate into the mainstream Western culture and accept its “civilized” values. Yet in much of the West, religion has been replaced by individualism. Many Muslim immigrants contrasting these modern cultures with traditional values see them as decadent and hostile, creating among many a sense of the Western Other.",
    dataSet: {
      data: createRandomData(DataLabels.length),
      label: "Cultural Identity",
      borderColor: "#953ecd",
      fill: false
    }
  },
  {
    currrentCount: createRandomData(DataLabels.length)[0],
    title: "Resentment of the Rising Radical Income Inequality",
    topicName: "Income inequality",
    description: "The gap between the billionaire class and the working poor is the greatest at any time in human history since the Pharaohs had their slaves build the pyramids. Despite the modern comforts the underclasses enjoy, they understand and resent this grossly unfair distribution of economic power.",
    quote: "You get an elite who think they did it all on their own and they deserve their position, and the people who didn’t pass exams and feel left behind. First they think the system is rigged which is a reasonable thing to think and then also partway blame themselves,” he says.“We’ve created this meritocratic aristocracy and people who didn’t make it are pissed off.",
    dataSet: {
      data: createRandomData(DataLabels.length),
      label: "Inequality",
      borderColor: "#8ea2ce",
      fill: false
    }
  },
  {
    currrentCount: createRandomData(DataLabels.length)[0],
    title: "Resentment of Experts/Academics/Urban Elites/Pundit Class",
    topicName: "Resentment of elite",
    description: "Insulation of the ivory tower, growing educational gaps between urban/rural/suburban demographics, the information economy creating new divisions of have and have nots -- all combine to create a deep suspicion of “expert” opinions, and fuels the rise of “alternative facts” and counter narratives.",
    quote: "In other words, a cultural elite may be disliked for reasons that are not particularly economic: college professors, experts, NGO staffers and psychotherapists are not corporate titans, after all. It’s a new variation of an old-fashioned populism that is anti-intellectual and anti-expert.",
    dataSet: {
      data: createRandomData(DataLabels.length),
      label: "Resentment of Elites",
      borderColor: "#ba3c9f",
      fill: false
    }
  },
  {
    currrentCount: createRandomData(DataLabels.length)[0],
    title: "Desire for Strong Man/Central Authority to Rectify Society",
    topicName: "Desire for strong man",
    description: "Once trust in journalism, the media, and other political institutions is broken, many constituents look for brute force, top-down solutions to “fix” the broken society, often putting their trust in a single figure or party loyalty, as the “only solution” to the ills of a dysfunctional system.",
    quote: "This trend is not confined to the U.S. In every region of the world, changing times have boosted public demand for more muscular, assertive leadership. These tough-talking populists promise to protect “us” from “them.” Depending on who’s talking, “them” can mean the corrupt elite or the grasping poor; foreigners or members of racial, ethnic or religious minorities. Or disloyal politicians, bureaucrats, bankers or judges. Or lying reporters. Out of this divide, a new archetype of leader has emerged. We’re now in the strongman era.",
    dataSet: {
      data: createRandomData(DataLabels.length),
      label: "Strong Man",
      borderColor: "#89c863",
      fill: false
    }
  },
  {
    currrentCount: createRandomData(DataLabels.length)[0],
    title: "Feeling Ignored/Not Listened To by Politicians/Elites",
    topicName: "Feeling ignored",
    description: "Harboring many or all of these misgivings, these citizens feel they have spoken up, reached out, perhaps wrote an email to political/journalistic actor in their local or national discourse; almost universally they came away feeling like their concerns were ignored.",
    quote: "Elites simply don’t understand these voters and find their voting behavior unfathomable because they rarely really interact with them, socialize with them, and, most important, listen to them. And people know it. To quote one voter’s attitude toward elites: “They think that because they’re [so] smart, that their opinion matters more than yours, because you’re not as smart as them.",
    dataSet: {
      data: createRandomData(DataLabels.length),
      label: "Not Listened To",
      borderColor: "#05c458",
      fill: false
    }
  },
  {
    title: "QAnon",
    topicName: "Qanon",
    description: "QAnon is a disproven and discredited far-right conspiracy theory alleging that a secret cabal of Satan-worshipping, cannibalistic pedophiles is running a global child sex-trafficking ring and plotted against former U.S. president Donald Trump while he was in office. According to U.S. prosecutors, QAnon is commonly called a cult.",
    dataSet: {
      borderColor: "#d82129",
    }
  },
  {
    title: "Fake News / Distrust of Traditional Media",
    topicName: "Distrust of media",
    description: "With the loss of centralized broadcast authorities, in a splintered, narrow-cast media market, demonstrable effort by bad actors to commit misinformation campaigns across all platforms, despite efforts of journalists and watchdogs, the “truth” becomes up for debate.",
    dataSet: {
      borderColor: "#551498",
    }
  },
  {
    title: "Conflict over Race/Racism/Identity",
    topicName: "False accusations of racism",
    description: `The core conflict for many on the Left and Right, whether explicit or implicit, with both sides finding much to agitate about and revile in the other. Accusations of racism, labels like white “fragility” and “privilege”, removal of public monuments, purges of the “woke”, demands for reparations for history -- all create a volatility that prevents real understanding.`,
    dataSet: {
      borderColor: "#2594f8",
    }
  },
  {
    title: "Defiance of Pandemic Overreach: “Nanny State”",
    topicName: "Nanny state",
    description: "Given the core platform of the populists, “starve the beast”, “dismantle the nanny state”, 	deregulation, cancellation of social programs, it’s no surprise that when called upon to embrace collectivist policies regulating movement and mandating masks, core supporters rebelled en masse.",
    dataSet: {
      borderColor: "#c514c8",
    }
  },
  {
    title: "Call to Voter Suppression/Vigilantism",
    topicName: "Call to vigilante action",
    description: "Feeling betrayed by mainstream media and popular opinion, supporters of populist causes decide to take the law into their own hands to manifest the political outcome they seek, without regard for democratic process.",
    dataSet: {
      borderColor: "#c53428",
    }
  },
  {
    title: "Dehumanization/”Othering” of Political Opponents",
    topicName: "Dehumanization of opponents",
    description: "Viewing political opponents as illegitimate, or even as inhuman, invalidates the votes of those opponents and the content of their opinions, making it easier for the populist supporters to disengage from the democratic process and doubt or disregard polling outcomes.",
    dataSet: {
      borderColor: "#a50418",
    }
  },
  {
    title: "Restrictions on Populist “Free Speech”",
    topicName: "Restrictions on free speech",
    description: "Free speech forms a cornerstone of tolerant, democratic society; as such only intolerant, illiberal, anti-democratic speech represents a threat. Restrictions on populist messages that fit these criteria outraged the populist base, and turned free speech and “cancel culture” into a battleground.",
    dataSet: {
      borderColor: "#0584a8",
    }
  },
/*  {
    title: "Fear of Loss of Sovereignty",
    topicName: "Loss of sovereignty",
    description: "The rise of ultra-nationalistic and ethno-nationalistic sentiment originates in the perceived threat of global government or federated authority that would strip sovereign rights from traditional nation states, thus abrogating essential “freedoms” once guaranteed by those nation states.",
    dataSet: {
      borderColor: "#95a428",
    }
  },*/
  {
    title: "Resentment of Immigrant/Minority Receiving “Undeserved Support”",
    topicName: "Undeserving support",
    description: "Having divided their societies into “makers” and “takers”, and having decided those that disagree with them lack legitimacy, the logical next step for populist narratives moves decisively to identify recipients of State support, protection and asylum as unworthy of such aid.",
    dataSet: {
      borderColor: "#c56c83",
    }
  },
  {
    title: "Citizen Engagement",
    topicName: "Citizen Engagement",
    description: "Countervalent to all of the polarization of populist narratives, we wanted to control with a search for textual evidence of citizens of opposing viewpoints engaging with one another in tones of reasoned argumentation and mutual respect.",
    dataSet: {
      borderColor: "#403bf4",
    }
  },
  {
    title: "Democratic Innovation",
    topicName: "Democratic Innovation",
    description: "As further control, we searched for textual instances of innovation, progress and engagement in democratic processes discussed, critiqued, extolled, or referenced.",
    dataSet: {
      borderColor: "#2631f4",
    }
  }
]