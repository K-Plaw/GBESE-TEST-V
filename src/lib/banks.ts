export interface Bank {
  name: string;
  account: string;
  logo: string;
  accountNumber: number;
}

export const mockBanks: Bank[] = [
  { name: 'GTBank', account: 'Ubuara Dorothy', logo: '/banks/gtbank.png', accountNumber: 7034758922 },
  { name: 'First Bank', account: 'Okereke Khen', logo: '/banks/firstbank.png', accountNumber: 1219894627 },
  { name: 'Zenith Bank', account: 'Divine Tochi', logo: '/banks/zenithbank.png', accountNumber: 6030123456 },
  { name: 'Access Bank', account: 'Chukwudi Chijioke', logo: '/banks/accessbank.png', accountNumber: 1234567890 },
];

// Simulated API call
export const fetchBanks = (): Promise<Bank[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockBanks);
    }, 1000); // simulate 1 second delay
  });
};
