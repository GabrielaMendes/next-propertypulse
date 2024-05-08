import { Account, NextAuthOptions, Profile, Session, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";

const googleProvider = GoogleProvider({
	clientId: process.env.GOOGLE_CLIENT_ID!,
	clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
	authorization: {
		params: {
			prompt: "consent",
			access_type: "offline",
			response_type: "code",
		},
	},
});

// Invoiked on successful signin
const signIn = async ({
	user,
	account,
	profile,
}: {
	user: User | AdapterUser;
	account: Account | null;
	profile?: Profile;
}) => {
	// 1. Connect to database
	// 2. Check if user exists
	// 3. If not, then add user to database
	// 4. Return true to allow sign in
	return true;
};

// Modifies the session object
const session = async ({ session }: { session: Session }) => {
	// 1. Get user from database
	// 2. Assign the user id to the session
	// 3. return session
	return session;
};

// Define authOptions
const authOptions: NextAuthOptions = {
	providers: [googleProvider],
	callbacks: {
		signIn,
		session,
	},
};

export { authOptions };
