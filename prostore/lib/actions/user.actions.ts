'use server';

// import { isRedirectError } from 'next/navigation';
import { signIn, signOut } from '@/auth';
import { signInFormSchema } from '../validators';

// Sign in the user with credentials
export async function signInWithCredentials(
  prevState: unknown,
  formData: FormData
) {
  try {
    // Set user from form and validate it with Zod schema
    const user = signInFormSchema.parse({
      email: formData.get('email'),
      password: formData.get('password'),
    });

    await signIn('credentials', user);

    return { success: true, message: 'Signed in successfully' };
  } catch (error) {
    // if (isRedirectError(error)) {
      throw error; // Allow Next.js to handle the redirect properly
    // }

    return { success: false, message: 'Invalid email or password' };
  }
}

// Sign the user out
export async function signOutUser() {
  await signOut();
}
