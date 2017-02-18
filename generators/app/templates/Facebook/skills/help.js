module.exports = function(controller) {
  controller.hears('help', 'message_received, facebook_postback', function(bot, message) {
    controller.storage.users.get(message.user, function(err, user) {
      if (user && user.name) {
        bot.reply(message, 'Hello ' + user.name + '!!');
      } else {
        bot.reply(message, 'Hello.');
      }
    });
  });
}
