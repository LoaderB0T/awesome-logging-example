'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const chalk_1 = __importDefault(require('chalk'));
const awesome_logger_1 = require('./awesome-logger');
awesome_logger_1.AwesomeLogger.log('');
awesome_logger_1.AwesomeLogger.log('');
awesome_logger_1.AwesomeLogger.log('');
awesome_logger_1.AwesomeLogger.log('');
awesome_logger_1.AwesomeLogger.log('');
awesome_logger_1.AwesomeLogger.log('');
setTimeout(() => {
  const textA = 'One line of text...';
  const textB = 'Multiple\nLines\nof Text!';
  let state = true;
  const logControl = awesome_logger_1.AwesomeLogger.log(textA);
  setInterval(() => {
    state = !state;
    logControl.setText(state ? textA : textB);
  }, 1000);
}, 3000);
const logProgressControl = awesome_logger_1.AwesomeLogger.log('progress', {
  totalProgress: 100,
  text: 'Very important progress:'
});
let i = 0;
const interval = setInterval(() => {
  logProgressControl.setProgress(i++);
  if (i === 100) {
    clearInterval(interval);
  }
}, 500);
setInterval(() => {
  awesome_logger_1.AwesomeLogger.interrupt('interrupt' + Math.random());
}, 4000);
const promptForLog = () => {
  const a = awesome_logger_1.AwesomeLogger.prompt('choice', {
    options: [
      'text',
      'spinner',
      'progressbar',
      'placeholder1',
      'placeholder2',
      'placeholder3',
      'placeholder4',
      'placeholder5'
    ]
  });
  a.result.then(x => {
    const logger = createExampleLogger(x);
    awesome_logger_1.AwesomeLogger.log(logger);
    setTimeout(() => {
      promptForLog();
    }, 2000);
  });
};
promptForLog();
const createExampleLogger = type => {
  switch (type) {
    case 'text': {
      return awesome_logger_1.AwesomeLogger.create('text', {
        text: chalk_1.default.red('Example text')
      });
    }
    case 'spinner': {
      return awesome_logger_1.AwesomeLogger.create('spinner', {
        text: ' My text',
        spinnerDelay: 75,
        spinnerFrames: [
          chalk_1.default.magenta('■'),
          chalk_1.default.magenta('▄'),
          chalk_1.default.magenta('■'),
          chalk_1.default.magenta('▀'),
          chalk_1.default.magenta('▀'),
          chalk_1.default.yellow('■'),
          chalk_1.default.yellow('▄'),
          chalk_1.default.yellow('■'),
          chalk_1.default.yellow('▀'),
          chalk_1.default.yellow('▀')
        ]
      });
    }
    case 'progressbar': {
      return awesome_logger_1.AwesomeLogger.create('progress', {
        totalProgress: 100,
        filledColor: 'GREEN',
        maxWidth: 100
      });
    }
  }
};
//# sourceMappingURL=index.js.map
