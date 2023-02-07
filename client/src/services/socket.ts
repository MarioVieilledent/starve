import { io } from "socket.io-client";

export const socket = io(`wss://${window.location.hostname}:${window.location.port}`);