import { io } from 'socket.io-client';
import Cookies from "js-cookie";

const URL = 'http://localhost:9000/chats';
const token = Cookies.get("token");

export const socket = io(URL, {query: {token}});