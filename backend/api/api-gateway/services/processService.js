import axios from 'axios';

const PROCESS_SERVICE_URL =  "http://process-service:3002" // 'http://localhost:3002';

export async function getProcesses({ params, dataInicial, dataFinal }) {
  return axios.get(`${PROCESS_SERVICE_URL}/process`,{
      params: {
        params,
        dataInicial,
        dataFinal 
      }
    }
    // headers: { Authorization: `Bearer ${token}` },
  );
}

export async function updateStatus(hash_id, newStatus) {
  return axios.patch(
    `${PROCESS_SERVICE_URL}/process/${hash_id}/status`,
    { newStatus },
    // { headers: { Authorization: `Bearer ${token}` } }
  );
}
