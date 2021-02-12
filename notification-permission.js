const messageNotif = {
  allowed: "Fitur notifikasi diijinkan.",
  denied: "Fitur notifikasi tidak diijinkan.",
  closed: "Pengguna menutup kotak dialog permintaan ijin.",
  not_supported: "Notifikasi belum didukung browser ini",
};

// Periksa fitur Notification API
if ("Notification" in window) {
  requestPermission();
} else {
  console.error(messageNotif.not_supported);
}

// Meminta ijin menggunakan Notification API
function requestPermission() {
  Notification.requestPermission().then((result) => {
    if (result === "denied") {
      console.log(messageNotif.denied);
      return;
    } else if (result === "default") {
      console.error(messageNotif.closed);
      return;
    }

    console.log(messageNotif.allowed);
  });
}
