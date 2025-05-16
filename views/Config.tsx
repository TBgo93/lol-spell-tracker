import { StyleSheet, Text, View, Button } from 'react-native';
import { Lane } from '@/components/Lane';
import { LANES } from '@/constants/spells';

import type { LaneSpells, StateLane } from '@/types';

interface Props {
  handleClick: () => void;
  handleCancel: () => void;
  spellsByLane: LaneSpells;
  setSpellsByLane: (spellsByLane: LaneSpells) => void;
}

export function Config(props: Props) {
  const { handleClick, handleCancel, spellsByLane, setSpellsByLane } = props;

  const someSpellIsEmpty = Object.values(spellsByLane).some((spells) => spells.D === "" || spells.F === "");

  const handleClickLane = (lane: string) => (state: StateLane) => {
    setSpellsByLane({ ...spellsByLane, [lane]: state });
  }

  return (
    <>
      <View>
        <Text style={styles.title}>Configura los hechizos</Text>
      </View>
      <View>
        <Lane text={LANES.top} lane="top" handleLane={handleClickLane("top")} />
        <Lane text={LANES.jungle} lane="jungle" handleLane={handleClickLane("jungle")} />
        <Lane text={LANES.mid} lane="mid" handleLane={handleClickLane("mid")} />
        <Lane text={LANES.adCarry} lane="adCarry" handleLane={handleClickLane("adCarry")} />
        <Lane text={LANES.support} lane="support" handleLane={handleClickLane("support")} />
      </View>
      <View style={styles.container_button}>
        <Button color="#3F728D" title="Guardar" onPress={handleClick} disabled={someSpellIsEmpty} />
        <Button color="#6F728D" title="Volver" onPress={handleCancel}/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 6,
    color: '#fff',
  },
  container_button: {
    flexDirection: "column",
    gap:10
  }
});
