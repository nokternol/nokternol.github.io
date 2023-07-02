import React from 'react';
import { Container, Paper, Text, Button } from '@mantine/core';

function App() {
  return (
    <Container size="xl" style={{ paddingTop: '2rem' }}>
      <Paper shadow="xs">
        <Text size="xl" weight={700} align="center">
          Developer Portfolio
        </Text>
        <Text size="md" align="center" style={{ marginTop: '0.5rem' }}>
          TypeScript and React Enthusiast
        </Text>
        <Button
          component="a"
          href="https://github.com/your-username"
          variant="outline"
          fullWidth
          style={{ marginTop: '1rem' }}
        >
          GitHub
        </Button>
      </Paper>
    </Container>
  );
}

export default App;
