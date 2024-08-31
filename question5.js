function checkLamps() {
    // Simulação das lâmpadas e interruptores
    let lamp1 = false; // Lamp 1 is off
    let lamp2 = false; // Lamp 2 is off
    let lamp3 = false; // Lamp 3 is off
    let warmLamp = null;

    // Passo 1: Ligue o primeiro interruptor
    lamp1 = true;

    // Simula o tempo que a lâmpada 1 fica ligada (para aquecer)
    warmLamp = lamp1;

    // Passo 2: Desliga o primeiro interruptor e ligue o segundo
    lamp1 = false;
    lamp2 = true;

    // Passo 3: Identificar as lâmpadas
    if (lamp2) {
        console.log("A lâmpada 2 está ligada, corresponde ao segundo interruptor.");
    }
    
    if (!lamp1 && warmLamp) {
        console.log("A lâmpada 1 está quente, mas desligada. Corresponde ao primeiro interruptor.");
    }
    
    console.log("A lâmpada 3 está fria e desligada. Corresponde ao terceiro interruptor.");
}

checkLamps();
