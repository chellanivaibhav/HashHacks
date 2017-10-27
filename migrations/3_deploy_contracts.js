var Migrations = artifacts.require("./ShareDoc.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
