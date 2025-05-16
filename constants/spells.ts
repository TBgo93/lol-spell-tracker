const SUMMONER_SPELLS = [
  { name: "Flash", duration: 300, image: require("@/assets/spells/flash.png") },
  { name: "Heal", duration: 240, image: require("@/assets/spells/heal.png") },
  { name: "Fantasmal", duration: 240, image: require("@/assets/spells/ghost.png") },
  { name: "Ignite", duration: 180, image: require("@/assets/spells/ignite.webp") },
  { name: "Exhaust", duration: 240, image: require("@/assets/spells/exhaust.png") },
  { name: "Teleport", duration: 300, image: require("@/assets/spells/teleport.webp") },
  { name: "Barrier", duration: 180, image: require("@/assets/spells/barrier.png") },
  { name: "Cleanse", duration: 210, image: require("@/assets/spells/cleanse.png") },
  { name: "Smite", duration: 90, image: require("@/assets/spells/smite.png") },
];


const DEFAULT_SPELLS_BY_LANE = {
  top: { D: "Flash", F: "Teleport" },
  jungle: { D: "Flash", F: "Smite" },
  mid: { D: "Flash", F: "Ignite" },
  adCarry: { D: "Flash", F: "Heal" },
  support: { D: "Flash", F: "Ignite" },
} as const;

const LANES = {
  top: "Top",
  jungle: "Jungle",
  mid: "Mid",
  adCarry: "AD Carry",
  support: "Support",
} as const;

export { SUMMONER_SPELLS, LANES, DEFAULT_SPELLS_BY_LANE };
