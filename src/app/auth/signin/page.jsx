import SigninForm from "./signinForm";


export default async function SigninPage({ searchParams }) {
    const params = await searchParams;
    const redirectTo = params?.redirect || "/";

    return <SigninForm redirectTo={redirectTo} />;
}