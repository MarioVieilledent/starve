import { io } from "socket.io-client";

export const socket = io(`ws://localhost:${process.env.PORT || 5000}`);