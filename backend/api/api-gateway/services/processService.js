import axios from 'axios';

const PROCESS_SERVICE_URL =  "http://process-service:3002" // 'http://localhost:3002';

export async function getProcesses(query) {
  return axios.get(`${PROCESS_SERVICE_URL}/process`, {
    // headers: { Authorization: `Bearer ${token}` },
    params: query,
  });
}

export async function updateStatus(hash_id, newStatus) {
  return axios.patch(
    `${PROCESS_SERVICE_URL}/process/${hash_id}/status`,
    { newStatus },
    // { headers: { Authorization: `Bearer ${token}` } }
  );
}
