import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from "../src/theme/mainTheme";


addDecorator(story => <ThemeProvider theme={theme}> {story()} </ThemeProvider>);
