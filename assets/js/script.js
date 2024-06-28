function generatePDF() {
    const name = document.getElementById('name').value;
    const IDm = document.getElementById('IDm').value;
    const date = document.getElementById('date').value;
    const entryTime = document.getElementById('entryTime').value;
    const exitTime = document.getElementById('exitTime').value;
    let status = '';

        if (document.getElementById('present').checked) {
            status = 'Presente';
        } else if (document.getElementById('fal').checked) {
            status = 'Falta';
        } else {
            alert('Preencha todos os campos!');
            return;
        }

    const doc = new jsPDF();

    doc.text(`Nome: ${name}`, 10, 10);
    doc.text(`Matricula: ${IDm}`, +10, 20);
    doc.text(`Dia e Mês: ${date}`, 10, 30);
    doc.text(`Horário de entrada: ${entryTime}`, 10, 40);
    doc.text(`Horário de saída: ${exitTime}`, 10, 50);
    doc.text(`Estado: ${status}`, 10, 60);

    doc.save('relatorio.pdf');
    
}

