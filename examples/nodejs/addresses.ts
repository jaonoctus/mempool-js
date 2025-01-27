import mempoolJS from '../../src/index';

const init = async () => {
  const { addresses } = mempoolJS();

  const address = '1wizSAYSbuyXbt9d8JV8ytm5acqq2TorC';

  const addressTest = await addresses.getAddress(address);
  console.log(addressTest);

  const addressTxs = await addresses.getAddressTxs(address);
  console.log(addressTxs);

  const addressTxsChain = await addresses.getAddressTxsChain(address);
  console.log(addressTxsChain);

  const addressTxsMempool = await addresses.getAddressTxsMempool(address);
  console.log(addressTxsMempool);

  const addressTxsUtxo = await addresses.getAddressTxsUtxo(address);
  console.log(addressTxsUtxo);
};
init();
