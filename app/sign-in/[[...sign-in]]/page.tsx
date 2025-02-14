
import { SignIn } from '@clerk/nextjs';


export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center ">
      {/* Logo or Branding */}
      

      {/* Clerk SignIn Component */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <SignIn />
      </div>

    <div>
    </div>
    </div>
  );
}