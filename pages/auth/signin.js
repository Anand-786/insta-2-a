import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import React from 'react'
import Header from "../../components/Header";

//Browser..
function signIn({ providers }) {
    return (
        <>
          <Header />
          <div className="flex flex-col items-center py-2 px-14 text-center min-h-fit">
            <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
            <p className="font-xs italic">
              This is not a REAL app, it is built for learning purposes only.
            </p>
            <div className="mt-40">
              {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                  <button className="p-3 bg-blue-500 rounded-lg text-white font-semibold" 
                  onClick={() => SignIntoProvider(provider.id, {callbackUrl: "/"})}>
                    Sign in with {provider.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </>
      );
}
//Server-side render
export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers
        }
    }
}

export default signIn