const message = {
  registered: "Pendaftaran ServiceWorker berhasil",
  failed: "Pendaftaran ServiceWorker gagal",
  not_supported: "ServiceWorker belum didukung browser ini",
};

const registerServiceWorker = () => {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then(function () {
      console.log(message.registered);
    })
    .catch(function () {
      console.log(message.failed);
    });
};

// REGISTER SERVICE WORKER
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    registerServiceWorker();
  });
} else {
  console.log(message.not_supported);
}
