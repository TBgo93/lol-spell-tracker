import { useState, useRef, useEffect } from 'react';

import { StyleSheet, Text } from 'react-native';

import { formatTime } from '@/helpers';

interface PositiveTimerProps {
  enableTimer: boolean;
}

export function PositiveTimer(props: PositiveTimerProps) {
  const { enableTimer } = props;
  const [time, setTime] = useState(0);

  const interval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (enableTimer) {
      interval.current = setInterval(() => {
        setTime(time => time + 1);
      }, 1000);
    }

    return () => {
      if (interval.current) {
        clearInterval(interval.current);
      }
    };
  }, [enableTimer]);

  return (
    <Text style={styles.text}>{formatTime(time)}</Text>
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
