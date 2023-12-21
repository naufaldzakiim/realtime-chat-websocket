import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Cookies from "js-cookie";

export default function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  const userData = request.cookies.get("user");
  const user = userData && JSON.parse(userData.value);

  // redirect unauthenticated users to signin page
  if (
    (request.nextUrl.pathname.startsWith("/chats")) &&
    !token
  ) {
    // console.log("dont have token");
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  // redirect authenticated users to chats page
  if (token && request.nextUrl.pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/chats", request.url));
  }

  // rewrite chats/id to chats
  // if (request.nextUrl.pathname.startsWith("/chats/")) {
  //   return NextResponse.rewrite(new URL("/chats", request.url));
  // }

  // if (request.nextUrl.pathname.startsWith("/chats/") && request.nextUrl.pathname !== "/chats/") {
  //   const id = request.nextUrl.pathname.split("/")[2];
  //   return NextResponse.rewrite(new URL(`/chats/${id}`, request.url));
  // }
  
}
