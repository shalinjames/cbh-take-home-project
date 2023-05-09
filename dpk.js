const crypto = require('crypto');

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = '0';
  const MAX_PARTITION_KEY_LENGTH = 256;
  const ALGORITHM = 'sha3-512';
  const ENCODING = 'hex';
  let candidate = TRIVIAL_PARTITION_KEY;

  const getHashForInput = (inputToHash) =>
    crypto.createHash(ALGORITHM).update(inputToHash).digest(ENCODING);

  const processPartitionKey = (partitionKey) => {
    if (typeof partitionKey !== 'string') {
      partitionKey = JSON.stringify(partitionKey);
    }
    if (partitionKey.length > MAX_PARTITION_KEY_LENGTH) {
      partitionKey = getHashForInput(partitionKey);
    }
    return partitionKey;
  };

  if (event) {
    if (event.partitionKey) {
      candidate = processPartitionKey(event.partitionKey);
    } else {
      const data = JSON.stringify(event);
      candidate = getHashForInput(data);
    }
  }

  return candidate;
};
