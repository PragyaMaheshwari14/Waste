// import { SignedIn, SignedOut, SignOutButton, SignUpButton, UserButton } from "@clerk/nextjs";

// export default function Home() {
//   return (
//     <div>
//         <SignUpButton/>
//         <SignOutButton/>
//     </div>
//   );
// }

import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
        <SignedOut>
          <SignInButton/>
        </SignedOut>
        <SignedIn>
          <UserButton/>
        </SignedIn>
        <SignOutButton/>
    </div>
  );
}
