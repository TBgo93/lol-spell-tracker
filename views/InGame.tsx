import { useState } from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';

import type { LaneSpells, LaneType } from '@/types';

import { PositiveTimer } from '@/components/Timer';
import { TouchableSpell } from '@/components/TouchableSpell';

interface Props {
  handleClick: () => void;
  spellsByLane: LaneSpells;
}

export function InGame(props: Props) {
  const { handleClick, spellsByLane } = props;
  const [enableTimer, setEnableTimer] = useState(false);

  return (
    <>
      <View>
        <Text style={styles.title}>In Game</Text>
        <PositiveTimer enableTimer={enableTimer}/>
      </View>
      <View style={{ flexDirection: 'column', gap: 28 }}>
        {Object.keys(spellsByLane).map((lane) => {
          const spells = spellsByLane[lane as LaneType];
          return (
            <View key={lane} style={styles.container_lane}>
              <Text style={styles.text}>{lane.toLocaleUpperCase()}</Text>
              <View style={{ flexDirection: 'row', gap: 16 }}>
                <TouchableSpell text={spells.D} />
                <TouchableSpell text={spells.F} />
              </View>
            </View>
          )
        })}
      </View>
      <View>
        {enableTimer 
          ? <Button color="#3F728D" title="Finalizar" onPress={() => {
            handleClick()
            setEnableTimer(false)
          }} />
          : <Button color="#3F728D" title="Iniciar partida" onPress={() => setEnableTimer(true)} />
        }
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 6,
    color: '#fff',
  },
  text: {
    fontSize: 24,
    marginBottom: 6,
    color: '#fff',
  },
  container_lane: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});
