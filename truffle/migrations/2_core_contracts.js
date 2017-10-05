// Generated by CoffeeScript 1.12.6
(function() {
  var dao, git_handler, main, tasks_handler, vault;

  main = require('Main');

  dao = require('Dao');

  vault = require('Vault');

  tasks_handler = require('TasksHandler');

  git_handler = require('GitHandler');

  module.exports = (function(_this) {
    return function(deployer) {
      return deployer.deploy(main, 'Test Metadata').then(function() {
        return deployer.deploy([dao, 'Zefram Lou', main.address], [vault, main.address], [tasks_handler, main.address], [git_handler, main.address]);
      });
    };
  })(this);

}).call(this);

//# sourceMappingURL=2_core_contracts.js.map
