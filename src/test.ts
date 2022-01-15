import chalk from 'chalk';
import { AwesomeLogger } from 'awesome-logging';

AwesomeLogger.log('');
AwesomeLogger.log('');
AwesomeLogger.log('');
AwesomeLogger.log('');
AwesomeLogger.log('');
AwesomeLogger.log('');

setInterval(() => {
  AwesomeLogger.interrupt('interrupting with a random number: ' + Math.random());
}, 4000);

const promptForLog = () => {
  const a = AwesomeLogger.prompt('choice', {
    options: ['text', 'spinner', 'progressbar', 'placeholder1', 'placeholder2', 'placeholder3', 'placeholder4', 'placeholder5']
  });

  a.result.then(x => {
    const logger = createExampleLogger(x)!;
    AwesomeLogger.log(logger);
    setTimeout(() => {
      promptForLog();
    }, 2000);
  });
};

promptForLog();

const createExampleLogger = (type: string) => {
  switch (type) {
    case 'text': {
      return AwesomeLogger.create('text', { text: chalk.red('Example text') });
    }
    case 'spinner': {
      return AwesomeLogger.create('spinner', {
        text: ' My text',
        spinnerDelay: 75,
        spinnerFrames: [
          chalk.magenta('■'),
          chalk.magenta('▄'),
          chalk.magenta('■'),
          chalk.magenta('▀'),
          chalk.magenta('▀'),
          chalk.yellow('■'),
          chalk.yellow('▄'),
          chalk.yellow('■'),
          chalk.yellow('▀'),
          chalk.yellow('▀')
        ]
      });
    }
    case 'progressbar': {
      return AwesomeLogger.create('progress', {
        totalProgress: 100,
        filledColor: 'GREEN',
        maxWidth: 100
      });
    }
  }
};
