import { StyleSheet, Text, View, TouchableHighlight, Modal, Image } from 'react-native';

import { SUMMONER_SPELLS } from '@/constants/spells';

interface Props {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  handleClick: (spellName: string) => void;
}

export function CustomModal(props: Props) {
  const { showModal, setShowModal, handleClick } = props;
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      onRequestClose={() => setShowModal(!showModal)}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
        <TouchableHighlight
          style={styles.closeButton}
          onPress={() => setShowModal(false)}
        >
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableHighlight>
          <Text style={styles.modalText}>Selecciona el hechizo</Text>
          <View style={styles.spellsView}>
            {SUMMONER_SPELLS.map((spell) => {
              return (
                <TouchableHighlight
                  key={spell.name}
                  style={styles.buttonModal}
                  onPress={() => {
                    setShowModal(!showModal)
                    handleClick(spell.name)
                  }}>
                  <Image source={spell.image} alt={spell.name} />
                </TouchableHighlight>
              )
            })}
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    position: 'absolute',
    top: 18,
    right: 20,
    width: 20,
    height: 20,
  },
  closeButtonText: {
    fontSize: 16,
    textAlign: 'center',
  },
  spellsView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8
  },
  buttonModal: {
    borderRadius: 12,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
});

