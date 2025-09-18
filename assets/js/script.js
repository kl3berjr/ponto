// === Seleção dos elementos ===
const formFields = {
  name: document.getElementById('name'),
  IDm: document.getElementById('IDm'),
  date: document.getElementById('date'),
  entryTime: document.getElementById('entryTime'),
  exitTime: document.getElementById('exitTime'),
};

// === Funções utilitárias ===

// Retorna data atual no formato YYYY-MM-DD
const getTodayDate = () => new Date().toISOString().split('T')[0];

// Retorna hora atual no formato HH:MM
const getCurrentTime = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
};

// Preenche campos iniciais do formulário
const initializeForm = () => {
  formFields.date.min = getTodayDate(); // Bloqueia datas anteriores
  formFields.entryTime.value = getCurrentTime(); // Preenche horário atual

};

// Gera PDF com os dados do formulário
const generatePDF = () => {
  const { name, IDm, date, entryTime, exitTime } = formFields;

  if (!name.value || !IDm.value || !date.value || !entryTime.value || !exitTime.value) {
    alert('Preencha todos os campos!');
    return;
  }

  const status = 'Entrada e saída preenchidos';

  const doc = new jsPDF();
  doc.text(`Nome: ${name.value}`, 10, 10);
  doc.text(`Matrícula: ${IDm.value}`, 10, 20);
  doc.text(`Dia e Mês: ${date.value}`, 10, 30);
  doc.text(`Horário de entrada: ${entryTime.value}`, 10, 40);
  doc.text(`Horário de saída: ${exitTime.value}`, 10, 50);
  doc.text(`Estado: ${status}`, 10, 60);

  doc.save('relatorio.pdf');
};

// === Inicialização ===
window.addEventListener('load', initializeForm);
