import axios from 'axios';

export const api = async (userData: FormData): Promise<any> => {
  const response = await axios.post(`https://test-job.pixli.app/send.php`, userData);

  return response.data;
};
