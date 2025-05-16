import { StyleSheet, View } from 'react-native';

interface Props {
  children: React.ReactNode;
}

export function Main({ children }: Props) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 40,
    justifyContent: 'space-between',
    backgroundColor: '#121212',
  },
});
