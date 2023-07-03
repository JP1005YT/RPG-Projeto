document.querySelector("button").addEventListener("click",async e => {
    const dados = await fetch('https://f923-2804-fec-d322-2f00-405f-3d65-c3a5-a412.ngrok-free.app/play/D20', {
        method: "GET",
        headers: {
            "Content-Type": "application/json" // Define o cabeçalho para JSON
        },
    });
})

const eventSource = new EventSource('/sse');

eventSource.addEventListener('message', (event) => {
  const data = JSON.parse(event.data);
  document.querySelector("span").innerHTML = data.Game.D20  
});