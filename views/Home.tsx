import { StyleSheet, Text, View, Button } from 'react-native';

interface Props {
  handleClick: () => void;
}

export function Home({ handleClick }: Props) {
  return (
    <>
      <View>
        <Text style={styles.text}>League Of Legends</Text>
        <Text style={styles.text}>Spell Tracker</Text>
      </View>
      <View>
        <Button color="#3F728D" title="Iniciar" onPress={handleClick} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 6,
    color: '#fff',
  },
});
