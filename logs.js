const { Logging } = require('@google-cloud/logging');
const logging = new Logging();
const log = logging.log('nodejs-app');

async function writeLog(type, timestamp, message) {
  const entry = log.entry(
    { 
      resource: { type: 'gce_instance', labels: { instance_id: '8866099574853481230' } } 
    },
    { type, timestamp, message } // message object
  );

  await log.write(entry);
  console.log('Logged:', type, message);
}

module.exports = { writeLog };
