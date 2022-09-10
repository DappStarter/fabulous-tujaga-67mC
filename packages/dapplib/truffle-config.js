require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remind modify heavy arctic success gather'; 
let testAccounts = [
"0xe79b41d9c62690903e4fbb7c873ce567ce06cdfe502a778b9f272cf12bd38b52",
"0x414b257c646f03e8120db751be962aa8e26d0cf9d23cee6bab5425eff8dcc8a3",
"0xf8bebde736aa91ae268e375a2d503719fcf90d9943aa087a19cc2667d7162ed7",
"0xede4dc907529c6f8b98947cda094cb2eadfc6553c611d80ca03b2467bc714313",
"0xde965605aff223e38ba5812587af211c756c46451001c35f30e753ff4510b11c",
"0x81ab4ce2f08958a902fce42bfdda4aee34e376833c7f1ceb5aac125b0d218121",
"0x7ad7c47a26c7ac3659fedd8d0ad638f91ce490a41bc5f640f539a619f3f90068",
"0xc4bbae76b6a39e2485be9973d01ecebdca462012d142c41cf4dfc64d954adb8b",
"0x8f3c27dffe06ea71bd38db8eb65481fc5edbc01a6bf506d739c7b86db7900924",
"0xb04f53663d84b76cbb7aa6efed6a4f5ccd097a71d168c214dc995df2fe7d1657"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


