document.addEventListener('DOMContentLoaded', (event) => {
    const dataAniver = new Date("Sept 11, 2024 07:07:00");
    const timeStamp = dataAniver.getTime();

    const contaHoras = setInterval(function() {
        const agora = new Date();
        const timeStampAtual = agora.getTime();

        const distanciaAteOEvento = timeStamp - timeStampAtual;

        const diaEmMs = 1000 * 60 * 60 * 24;
        const horaEmMs = 1000 * 60 * 60;
        const minutoEmMs = 1000 * 60;
        const segundoEmMs = 1000;

        const anoAtual = agora.getFullYear();
        const mesAtual = agora.getMonth();
        const anoEvento = dataAniver.getFullYear();
        const mesEvento = dataAniver.getMonth();
        
        let mesesAteOEvento = (anoEvento - anoAtual) * 12 + (mesEvento - mesAtual);
        
        if (agora.getDate() > dataAniver.getDate()) {
            mesesAteOEvento--;
        }

        const proximaData = new Date(anoAtual, mesAtual + mesesAteOEvento, dataAniver.getDate(), 7, 7, 0);
        const distanciaRestante = proximaData - agora;

        const diasAteOEvento = Math.floor(distanciaRestante / diaEmMs);
        const horasAteOEvento = Math.floor((distanciaRestante % diaEmMs) / horaEmMs);
        const minutosAteOEvento = Math.floor((distanciaRestante % horaEmMs) / minutoEmMs);
        const segundosAteOEvento = Math.floor((distanciaRestante % minutoEmMs) / segundoEmMs);

        document.getElementById('main__modify').innerHTML = `${mesesAteOEvento}m ${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

        if (distanciaAteOEvento < 0) {
            clearInterval(contaHoras);
            document.getElementById('main__modify').innerHTML = 'Já fiz 20 :)';
        }
    }, 1000);
});