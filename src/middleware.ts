import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/api(.*)"],
  beforeAuth: (req) => {
    console.log("middleware:beforeAuth 1", req.url);
    console.log("middleware:beforeAuth 2", req.headers.get('host'));
    console.log("middleware:beforeAuth 3", process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL);
    console.log("middleware:beforeAuth 4", process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL);
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
