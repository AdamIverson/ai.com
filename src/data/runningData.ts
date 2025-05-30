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

export const runningStats: RunningStats[] = [
  { label: "Total Races", value: "17" },
  { label: "100K Completions", value: "2" },
  { label: "50-Mile Finishes", value: "8" },
  { label: "Years Ultrarunning", value: "12+" }
];

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
    name: "Minnesota Voyageur Trail Ultra",
    distance: "50 Miler",
    year: "2016",
    time: "13:48:21",
    placement: "263rd Overall",
    note: "Another solid Voyageur finish"
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
    time: "14:27:26",
    placement: "26th Overall",
    note: "Technical and challenging Minnesota trail race"
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
