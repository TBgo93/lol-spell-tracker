import { LANES } from "../constants/spells";

export type SpellType = "D" | "F";

export type LaneType = keyof typeof LANES;

export type StateLane = {
  [key in SpellType]: string;
}

export type LaneSpells = {
  [key in LaneType]: StateLane;
}