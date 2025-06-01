export interface Race {
  name: string;
  distance: string;
  year: string;
  time: string;
  placement: string;
  note: string;
}

export interface RunningStats {
  label: string;
  value: string;
}

export interface Goal {
  goal: string;
  progress: number;
  status: string;
  target: string;
}

// Function to calculate running stats dynamically from races array
export const calculateRunningStats = (): RunningStats[] => {
  const hundredMileAttempts = races.filter(race => race.distance === "100 Miler").length;
  const hundredMileCompletions = races.filter(race => race.distance === "100 Miler" && race.time !== "DNF" && race.placement !== "DNF").length;

  const hundredKAttempts = races.filter(race => race.distance === "100K").length;
  const hundredKCompletions = races.filter(race => race.distance === "100K" && race.time !== "DNF" && race.placement !== "DNF").length;

  const fiftyMileAttempts = races.filter(race => race.distance === "50 Miler").length;
  const fiftyMileCompletions = races.filter(race =>
    race.distance === "50 Miler" &&
    race.time !== "DNF" &&
    race.placement !== "DNF" &&
    !race.time.includes("miles")
  ).length;

  const marathonAttempts = races.filter(race => race.distance === "Marathon").length;
  const marathonCompletions = races.filter(race => race.distance === "Marathon" && race.time !== "DNF" && race.placement !== "DNF").length;

  return [
    { label: "100 Mile Attempts", value: `${hundredMileCompletions}/${hundredMileAttempts}` },
    { label: "100K Completions", value: `${hundredKCompletions}/${hundredKAttempts}` },
    { label: "50-Mile Finishes", value: `${fiftyMileCompletions}/${fiftyMileAttempts}` },
    { label: "Marathons", value: `${marathonCompletions}/${marathonAttempts}` }
  ];
};

export const races: Race[] = [
  {
    name: "Superior Fall Trail Race",
    distance: "Marathon",
    year: "2022",
    time: "9:31:32",
    placement: "260th Overall",
    note: "Most recent ultra - challenging but rewarding"
  },
  {
    name: "Minnesota Voyageur Trail Ultra",
    distance: "50 Miler",
    year: "2019",
    time: "13:57:26",
    placement: "237th Overall",
    note: "Classic Minnesota trail ultra"
  },
  {
    name: "Minnesota Voyageur Trail Ultra",
    distance: "50 Miler",
    year: "2018",
    time: "13:33:54",
    placement: "309th Overall",
    note: "Strong consistent performance"
  },
  {
    name: "Chippewa Trail Races",
    distance: "50K",
    year: "2018",
    time: "7:57:51",
    placement: "146th Overall",
    note: "Wisconsin trail racing adventure"
  },
  {
    name: "Superior Fall Trail Race",
    distance: "100 Miler",
    year: "2016",
    time: "DNF",
    placement: "DNF",
    note: "Second 100-mile DNF attempt at Superior Fall"
  },
  {
    name: "Minnesota Voyageur Trail Ultra",
    distance: "50 Miler",
    year: "2016",
    time: "13:48:21",
    placement: "263rd Overall",
    note: "Another solid Voyageur finish"
  },
  {
    name: "Superior Fall Trail Race",
    distance: "100 Miler",
    year: "2017",
    time: "DNF",
    placement: "DNF",
    note: "Third 100-mile DNF attempt at Superior Fall"
  },
  {
    name: "Superior Fall Trail Race",
    distance: "50 Miler",
    year: "2015",
    time: "14:57:43",
    placement: "78th Overall",
    note: "First 50-mile finish at Superior Fall"
  },
  {
    name: "Minnesota Voyageur Trail Ultra",
    distance: "50 Miler",
    year: "2015",
    time: "12:44:50",
    placement: "159th Overall",
    note: "Personal best 50-mile time"
  },
  {
    name: "Wild Duluth Races",
    distance: "100K",
    year: "2014",
    time: "19:37:00",
    placement: "38th Overall",
    note: "Personal best 100K performance"
  },
  {
    name: "Minnesota Voyageur Trail Ultra",
    distance: "50 Miler",
    year: "2014",
    time: "13:24:32",
    placement: "183rd Overall",
    note: "Consistent Voyageur performance"
  },
  {
    name: "Black Hills 100",
    distance: "100 Miler",
    year: "2014",
    time: "DNF",
    placement: "DNF",
    note: "100-mile attempt - valuable learning experience"
  },
  {
    name: "Superior Fall Trail Race",
    distance: "100 Miler",
    year: "2014",
    time: "DNF",
    placement: "DNF",
    note: "100-mile DNF attempt at Superior Fall"
  },
  {
    name: "Wild Duluth Races",
    distance: "100K",
    year: "2013",
    time: "18:58:17",
    placement: "42nd Overall",
    note: "Second 100K completion at Wild Duluth"
  },
  {
    name: "Superior Fall Trail Race",
    distance: "50 Miler",
    year: "2013",
    time: "15:10:54",
    placement: "75th Overall",
    note: "Exploring the North Shore trails"
  },
  {
    name: "Black Hills 50 Miler",
    distance: "50 Miler",
    year: "2013",
    time: "14:32:19",
    placement: "25th Overall",
    note: "Strong performance in beautiful Black Hills"
  },
  {
    name: "Zumbro Endurance Run",
    distance: "50 Miler",
    year: "2013",
    time: "42 miles",
    placement: "DNF",
    note: "DNF at mile 42. Midnight start with mandatory lights, brutal weather conditions - first 17-mile loop was thick deep mud, by the second loop it was frozen (or maybe the other way around). Three 17-mile loops total. Dropped because I was afraid to go down a hill I knew was coming and concerned about hypothermia. Got a ride back on a four wheeler and in the back seat of someone's Lexus SUV. I was so sad that I didn't finish."
  },
  {
    name: "Afton Trail Run",
    distance: "50K",
    year: "2012",
    time: "6:48:54",
    placement: "150th Overall",
    note: "Classic Minnesota trail run in Afton State Park"
  },
  {
    name: "Superior Fall Trail Race",
    distance: "50 Miler",
    year: "2012",
    time: "34 miles",
    placement: "DNF",
    note: "DNF at mile 34 after being stung by a bunch of hornets, getting surprise rained on for a couple of hours, and then starting to do math in my head - which I would eventually realize was kryptonite to me while running"
  },
  {
    name: "Twin Cities Medtronic Marathon",
    distance: "Marathon",
    year: "2011",
    time: "5:01:35",
    placement: "7003 out of 8534",
    note: "Classic Twin Cities road marathon. I wore a pair of huarache sandals that broke on my way to the start line. I had to tie an impromptu and gigantic knot that sat between my first and second toes underneath the sandal and wrecked my foot. I ate a couple of cookies that were supposed help take the edge off but I'm almost positive they made it much harder to run 26 miles in a crowd."
  },
  {
    name: "Superior Fall Trail Race",
    distance: "Marathon",
    year: "2011",
    time: "6:47:55",
    placement: "74th Overall",
    note: "Marathon distance at Superior - North Shore beauty"
  },
  {
    name: "Afton Trail Run",
    distance: "25K",
    year: "2011",
    time: "3:48:30",
    placement: "188th Overall",
    note: "Early trail running experience at Afton State Park"
  }
];

export const goals: Goal[] = [
  {
    goal: "Return to Racing",
    progress: 25,
    status: "Base Building",
    target: "2025"
  }
];

export const trainingPhilosophy: string[] = [
  "snacks",
  "if it's not fun or i get sleepy i quit",
  "if you can figure out how to eat and drink, you can keep going",
  "trail running is an awful lot like scrolling",
  "while i can",
  "ice on the neck"
];
