const ether = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

async function main() {
  const wallet = new ether.Wallet(process.env.privateKey);
  const encrypted = await wallet.encrypt(
    process.env.keyPassword,
    process.env.privateKey
  );
  console.log(encrypted);
  fs.writeFileSync("./.encryptedKey.json", encrypted);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
