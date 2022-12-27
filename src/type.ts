export type Transaction = {
  // id: string;
  description: string;
  amount: number;
  createdDate: number;
  updatedDate?: number;
  createdBy: string;
};

export type User = {
  displayName: string;
  email: string;
  photoURL: string;
};
