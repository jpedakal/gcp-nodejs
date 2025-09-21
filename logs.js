const { Logging } = require('@google-cloud/logging');
const logging = new Logging();
const log = logging.log('nodejs-app');

function writeLog(message) {
  const entry = log.entry({ resource: { type: 'gce_instance', labels: { instance_id: '8866099574853481230' } } }, message);
  log.write(entry);
}

module.writeLog = writeLog
