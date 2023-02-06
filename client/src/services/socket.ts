import { io } from "socket.io-client";

// const PORT: number = 5000;
const PORT: number = 10000;

export const socket = io(`ws://localhost:${PORT}`);