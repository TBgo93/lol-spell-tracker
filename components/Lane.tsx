import { useState } from 'react';

import { StyleSheet, Text, View, TouchableHighlight, TouchableWithoutFeedback,Image  } from 'react-native';

import { CustomModal } from '@/components/Modal';

import { DEFAULT_SPELLS_BY_LANE, SUMMONER_SPELLS } from '@/constants/spells';

import type { SpellType, StateLane, LaneType } from '@/types';

const emptyImg = require("@/assets/question_mark.png");

interface Props {
  text: string;
  lane: LaneType;
  handleLane: (state: StateLane) => void;
}

export function Lane({ text, lane, handleLane }: Props) {
  const [showModal, setShowModal] = useState({ D: false, F: false });
  const [spells, setSpells] = useState<StateLane>({ D: "", F: "" });

  return (
    <View style={styles.container_lane}>
      <Text style={styles.lane}>{text}</Text>
      <View style={styles.container}>
        {["D", "F"].map((key) => {
          const keyName = key as SpellType;
          const img = SUMMONER_SPELLS.find((spell) => spell.name === spells[keyName])?.image || "";
          return (
            <View key={keyName} style={styles.spell}>
              <CustomModal
                showModal={showModal[keyName]}
                setShowModal={() => setShowModal({ ...showModal, [keyName]: !showModal[keyName] })}
                handleClick={(spellName) => {
                  setSpells({ ...spells, [keyName]: spellName })
                  handleLane({ ...spells, [keyName]: spellName })
                }}
              />
              <Text style={styles.text}>{keyName}</Text>
              <TouchableHighlight
                style={styles.button}
                onPress={() => setShowModal({ ...showModal, [keyName]: true })}
              >
                <Image source={spells[keyName] === "" ? emptyImg : img} alt={keyName} style={styles.img} />
              </TouchableHighlight>
            </View>
          )}
        )}
      </View>
      <View>
        <TouchableWithoutFeedback
          onPress={() => {
            setSpells(DEFAULT_SPELLS_BY_LANE[lane])
            handleLane(DEFAULT_SPELLS_BY_LANE[lane])
          }}
        >
          <Text style={{ width: 60, textAlign: 'center', color: '#fff' }}>Set default</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container_lane: {
    marginBottom: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  lane: {
    fontSize: 24,
    marginBottom: 6,
    color: '#fff',
    width: 150
  },
  container: {
    flexDirection: 'row',
    gap: 10,
    // width: 150,
  },
  spell: {
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    width: 32,
    height: 32,
    fontSize: 24,
    backgroundColor: '#3F718D',
    borderRadius: 50,
  },
  img: {
    width: 32,
    height: 32,
    borderRadius: 50
  }
});

