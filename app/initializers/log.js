export function initialize(application) {
  [
    'component',
    'controller',
    'route',
    'view'
  ].forEach(type => {
    application.inject(type, 'logService', 'service:log');
  });
}

export default {
  name: 'log',
  initialize
};
