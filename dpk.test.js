const { deterministicPartitionKey } = require('./dpk');

describe('deterministicPartitionKey', () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe('0');
  });

  it('Should return encrypted key for a string value', () => {
    const MOCK_EVENT = 'MOCK_EVENT_FOR_ENCRYPTION';
    const trivialKey = deterministicPartitionKey(MOCK_EVENT);
    expect(trivialKey).toBe(
      '95a4b6f61714ba87efcadd9758550548a53ade317c023c187d59008c0f086ee913e5f3a6fe3b467e3e7bdb5d18d79d0f56ea575da5b5cb349bd1d38ccb1c911c'
    );
  });

  it('Should return the partitionKey as is when input event.partitionKey is string', () => {
    const MOCK_EVENT = { partitionKey: 'MOCK_EVENT_FOR_ENCRYPTION' };
    const trivialKey = deterministicPartitionKey(MOCK_EVENT);
    expect(trivialKey).toBe('MOCK_EVENT_FOR_ENCRYPTION');
  });

  it('Should return the partitionKey as string when input event.partitionKey is not string', () => {
    const MOCK_EVENT = {
      partitionKey: { mockKey: 'mockValue', anotherArr: [123456, 123456] },
    };
    const trivialKey = deterministicPartitionKey(MOCK_EVENT);
    expect(trivialKey).toBe(
      '{"mockKey":"mockValue","anotherArr":[123456,123456]}'
    );
  });

  it('Should return new key if event key has more than 256 chars', () => {
    const MOCK_EVENT = `95a4b6f61714ba87efcadd9758550548a53ade317
    c023c187d59008c0f086ee913e5f3a6fe3b467e3e7bdb5d18d79d0f56ea57
    5da5b5cb349bd1d38ccb1c911c95a4b6f61714ba87efcadd9758550548a53
    ade317c023c187d59008c0f086ee913e5f3a6fe3b467e3e7bdb5d18d79d0f
    56ea575da5b5cb349bd1d38ccb1c911c95a4b6f61714ba87efcadd9758550
    548a53ade317c023c187d59008c0f086ee913e5f3a6fe3b467e3e7bdb5d18
    d79d0f56ea575da5b5cb349bd1d38ccb1c911c`;
    const trivialKey = deterministicPartitionKey(MOCK_EVENT);
    expect(trivialKey).toBe(
      'fbcc6e684e9541458cf3e822468d44ceaf5258ee5d19f210a4fbab2924bf3ecb87b770eab19abe9556dc1a5e7f24b98fcfba73023b8447b14214917fe3ee9bfb'
    );
  });

  it('Should return new key if event.partitionKey has more than 256 chars', () => {
    const MOCK_EVENT = {
      partitionKey: `95a4b6f61714ba87efcadd9758550548a53ade317
    c023c187d59008c0f086ee913e5f3a6fe3b467e3e7bdb5d18d79d0f56ea57
    5da5b5cb349bd1d38ccb1c911c95a4b6f61714ba87efcadd9758550548a53
    ade317c023c187d59008c0f086ee913e5f3a6fe3b467e3e7bdb5d18d79d0f
    56ea575da5b5cb349bd1d38ccb1c911c95a4b6f61714ba87efcadd9758550
    548a53ade317c023c187d59008c0f086ee913e5f3a6fe3b467e3e7bdb5d18
    d79d0f56ea575da5b5cb349bd1d38ccb1c911c`,
    };
    const trivialKey = deterministicPartitionKey(MOCK_EVENT);
    expect(trivialKey).toBe(
      '1c3c1e507eada0e472d8accfd6132948ca4891b375ccb28c3fb7ab7bd692f46eea609620d5b8799b960cbc7a991d98171968e2186c2291fa1f87d4d7d2f777cd'
    );
  });
});
