var webPush = require("web-push");

const vapidKeys = {
  publicKey:
    "BFtGzOP1RuhxmvsHEVqAkBr_USDTGJlwEoJUzNHVZLUEa59R3za6yS8IBRv4OeQ66L8pWsLU9EqXXxUWzc4U-Gk",
  privateKey: "xMSZeLzlEHwyjCYlyOfIxxmDaKNTG-uyV85b-rWs_bY",
};

webPush.setVapidDetails(
  "mailto:goal@kobol.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);
var pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/cO0hj_SA49k:APA91bGKoafCEoy8CAbRGH5wa1KMDEIhA04dOqBB8YcTIGKA5IlzWRCz5OAffNSpR4o8g6A1h8FKLuK59PR_5UTQB7SVbBpDuun27AlbCl3x94z9qnNK_JiZobiOuZb8aJz8E6-f2TDr",
  keys: {
    p256dh:
      "BF4ZHVCYpd8C72QgETiqfhR9Hh5gcD6Q5Ysg/7iEgBx86vC0s+ehx4VhCpe21enNYYvpW148ABrjZ305GAHNH4M=",
    auth: "7fl9Mv05HeKgwTSXBu61sQ==",
  },
};
var payload = "Halo! Yuk lihat pertandingan dari tim favoritemu minggu ini!";

var options = {
  gcmAPIKey: "419259519575",
  TTL: 60,
};
webPush.sendNotification(pushSubscription, payload, options);
