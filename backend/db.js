// Simple mock database (in-memory)
export let products = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 499,
    image: "https://m.media-amazon.com/images/I/51KmxQjXBlL._SL1500_.jpg"
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    price: 1299,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRWQd-15YFgiq0d2NUWtSa0k_Z1q1ZTbKwkwZM3lYtC6taB-qR8_KoXrXPUHu_OwdxTHol2XrPFviyZ0n40lBnA6vpIBAvx_WMK4FBUz25I0or1rfPGbcRnHa0"
  },
  {
    id: 3,
    name: "Bluetooth Headphones",
    price: 899,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR0l6VoZpUxdPXj3vyEqOBphmTsXhhHY6HjT9kyCMFrmfWvxlRhnkcL2gKEhjnVcBZo20rh6PBhamr3ETIykcAydAHdAKuQiWawpJhz05vZ8bZEUnPnWK1yYg"
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 1499,
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSa71Lbpu84UqQj43Edv-5TWyaLMrIaFMzuIO2bVvp5TgqGZ7NaghNsM_QyuISfxb8XcprH3bgm9OPN3sEMBNPDr0V7TlpgocGuxQcdQh2vpqRJq2NBmydiyg"
  },
  {
    id: 5,
    name: "USB-C Charger",
    price: 599,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRVIA5CL7v3nxHtCdgtQ5A7e4QhUbWhR2VsSNROCfccgpoj4TdPR4Pgx_6UQ9NpYnCkYCzI6IRH96oSUKpc2W4TROG75PcJsoLGYtwt6hIMlH7BRpd8s2XGzg"
  },
  {
    id: 6,
    name: "Laptop Stand",
    price: 899,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRL3xhLT39Pnzd1_nKHjn_K9hbAXAZzO_xS2its_IOvm86zBKIC8NCCzPG9AK5rxQr0bIWKaRcfFr7L1Gh_BqmDBInUPyJ-UL4r0x5RYnxUyLl-2h03zZ-4-GJTVspuug&usqp=CAc"
  },
  {
    id: 7,
    name: "Webcam 1080p",
    price: 1099,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS9YHb_Hp4FfxCwE4lbKMGJLa9OMXw6aQrobErxikeiErKUf9oh-w8pCgzkyzbHy2xxqcP04ugcsaCHGTuCY2A3GrTngXnXTqj_IKvABhUd7XCA72Xxe5sro2IzLNAwp4hSaXF5mSsFmQ&usqp=CAc"
  }
];

export let cart = [];