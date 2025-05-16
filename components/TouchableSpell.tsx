import { useState, useRef, useEffect } from 'react';

import { StyleSheet, Text, TouchableWithoutFeedback, Image, View } from 'react-native';

import { SUMMONER_SPELLS } from '@/constants/spells';

import { formatTime } from '@/helpers';


interface Props {
  text: string;
}

export function TouchableSpell({ text }: Props) {
  const duration = SUMMONER_SPELLS.find((spell) => spell.name === text)?.duration || 0;
  const img = SUMMONER_SPELLS.find((spell) => spell.name === text)?.image || "";

  const [enableTimer, setEnableTimer] = useState(false);
  const [time, setTime] = useState(duration);
  const interval = useRef<NodeJS.Timeout | null>(null);

  const handleClick = () => {
    setEnableTimer(!enableTimer);
    if (!enableTimer) {
      setTime(duration);
    }
  }

  if (interval.current && time === 0) {
    clearInterval(interval.current);
    interval.current = null;
    setEnableTimer(false);
  }

  useEffect(() => {
    if (enableTimer) {
      interval.current = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);
    }

    return () => {
      if (interval.current) {
        clearInterval(interval.current);
      }
    };
    }, [enableTimer]);

  return (
    <TouchableWithoutFeedback style={styles.button} onPress={handleClick}>
      <View style={styles.container}>
        <Text 
          style={[styles.text, { opacity: enableTimer ? 1 : 0 }]}
        >
          {formatTime(time)}
        </Text>
        <Image 
          style={[styles.img, { opacity: enableTimer ? 0.2 : 1 }]}
          source={img}
          alt={text}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
  },
  text: {
    fontSize: 22,
    color: '#fff',
    position: 'absolute'
  },
  img: {
    position: 'absolute',
    width: 46,
    height: 46
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});