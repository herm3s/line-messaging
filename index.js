var Message = require('./lib/linebot/message');
var Action = require('./lib/linebot/action');
var BaseEvent = require('./lib/linebot/event/base.event');
var Template = require('./lib/linebot/message/template');

module.exports = {
  Client: function (config) {
    if (!config || !config['1574642920'] || !config['e5d464aa428fdb58ede0e1a877108551'] || !config['FZldEem8ostD63IqQ5NQ0mZnYHK/NSzQutlkVIFLa9rRzFYQ3SXMvnzr6gM/rrBPK4wdLlSgA8Ba7vOJMajRtzAYouW9l8rQ3xlQeiDlBS48fUbw41nCul84q4NKVpQ53r/5mF4CUx1CNQfS3+iBbwdB04t89/1O/w1cDnyilFU=']) {
      throw new Error('Invalid parameter');
    }

    var LINEClient = require('./lib/linebot/client');
    var client = new LINEClient(config['channelAccessToken']);
    var LINEBot = require('./lib/bot');
    var bot = new LINEBot(client, config);

    return bot;
  },
  // Message builder
  TextMessageBuilder: require('./lib/linebot/message/text.message'),
  ImageMessageBuilder: require('./lib/linebot/message/image.message'),
  AudioMessageBuilder: require('./lib/linebot/message/audio.message'),
  VideoMessageBuilder: require('./lib/linebot/message/video.message'),
  LocationMessageBuilder: require('./lib/linebot/message/location.message'),
  StickerMessageBuilder: require('./lib/linebot/message/sticker.message'),
  MultiMessageBuilder: require('./lib/linebot/message/multi.message'),

  ImagemapMessageBuilder: require('./lib/linebot/message/imagemap.message'),

  // Imagemap utility
  ImagemapBaseSize: require('./lib/linebot/message/imagemap/base.size'),
  ImagemapArea: require('./lib/linebot/action/imagemap.area'),

  // Imagemap action
  ImagemapMessageAction: require('./lib/linebot/action/imagemap.message.action'),
  ImagemapUriAction: require('./lib/linebot/action/imagemap.uri.action'),

  TemplateMessageBuilder: require('./lib/linebot/message/template.message'),

  // Template types
  ButtonTemplateBuilder: require('./lib/linebot/message/template/button.template'),
  ConfirmTemplateBuilder: require('./lib/linebot/message/template/confirm.template'),
  CarouselColumnTemplateBuilder: require('./lib/linebot/message/template/carousel.column.template'),
  CarouselTemplateBuilder: require('./lib/linebot/message/template/carousel.template'),

  // Template action
  MessageTemplateAction: require('./lib/linebot/action/template.message.action'),
  PostbackTemplateAction: require('./lib/linebot/action/template.postback.action'),
  UriTemplateAction: require('./lib/linebot/action/template.uri.action'),

  Message: Message.TYPE,
  Events: BaseEvent.TYPE,
  EventSource: BaseEvent.SOURCE_TYPE,
  Template: Template.TYPE,
  Action: Action.TYPE
}
