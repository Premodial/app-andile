import { addDecorator } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { withThemeProvider } from './decorators/withThemeProvider';

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(withThemeProvider);