require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drop tail solution mansion creek stick mad install indoor forget slice'; 
let testAccounts = [
"0xff7982d9eb4b3577cf3120a085437e9b008d680099be84883168ae6691606755",
"0xf2322aba74acaf307ee031e474aa8ca66b33f9c03e626c2a4e4441e8df546281",
"0xb05f014f062464eb530b2171ea93992972635c25bab760dfee929e94292b7a07",
"0xf0ae8c6cdb45ffdb581371ff5cab2268987e0973e21ebafbf8cac191acd4ec46",
"0x8d50b2b2b0aa9642c46870d8f15644195337f48bd51f98169fd2bf078d580ff5",
"0x9160978cddfec00348afa21dde8624c7e41fb9e3eac9a4a4581b72b03784ef69",
"0x97389669545bb045874591b7abbeedac45fd1c60656386c91eace0fa96ec68c9",
"0x8fe26ffceab72bf88d9a5581e8756e085687c90dd2eb484b2d38934e606253dd",
"0x33616241120235d2ad4e98062ebf8b377278faf995f87979257e0467d61f0f34",
"0x0185eabffa99f9d38f1788c9c31540bff5d468f49fa36df0fa230d7ffb14a100"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

