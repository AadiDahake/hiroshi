export type Table = {
  id: number;
  x: number;
  y: number;
  seats: number;
  booked: boolean;
  type: "tatami" | "counter" | "garden" | "traditional";
};

export type Location = {
  name: string;
  description: string;
  icon: string;
  image: string;
};
