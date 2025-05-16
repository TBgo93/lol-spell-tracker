import { useState } from 'react';

import { StatusBar } from 'expo-status-bar';

import { Main } from './layouts/Main';

import { Home } from './views/Home';
import { Config } from './views/Config';
import { InGame } from './views/InGame'

import type { LaneSpells } from './types';

const APP_STATE = {
  idle: 'idle',
  select: 'select',
  inGame: 'in-game',
} as const;

type AppState = typeof APP_STATE[keyof typeof APP_STATE];

const EMPTY_LANE_SPELLS = {
  top: { D: "", F: "" },
  jungle: { D: "", F: "" },
  mid: { D: "", F: "" },
  adCarry: { D: "", F: "" },
  support: { D: "", F: "" },
} as const;

export default function App() {
  const [state, setState] = useState<AppState>(APP_STATE.idle);
  const [spellsByLane, setSpellsByLane] = useState<LaneSpells>(EMPTY_LANE_SPELLS);

  return (
    <Main>
      <StatusBar style='light' />
      {state === APP_STATE.select &&
        <Config
          spellsByLane={spellsByLane}
          setSpellsByLane={setSpellsByLane}
          handleClick={() => setState(APP_STATE.inGame)}
          handleCancel={() => {
            setSpellsByLane(EMPTY_LANE_SPELLS)
            setState(APP_STATE.idle)
          }}
        />
      }
      {state === APP_STATE.inGame &&
        <InGame
          spellsByLane={spellsByLane}
          handleClick={() => {
            setSpellsByLane(EMPTY_LANE_SPELLS)
            setState(APP_STATE.idle)
          }}
        />
      }
      {state === APP_STATE.idle &&
        <Home handleClick={() => setState(APP_STATE.select)} />
      }
    </Main>
  );
}
