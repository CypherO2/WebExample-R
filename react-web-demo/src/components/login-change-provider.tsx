import { FormEvent, ReactNode, createContext, useState } from "react";

export const NameContext = createContext<NameContextType | null>(null);

interface NameContextType {
  buttonName: string;
  setButtonName: (name: string) => void;
}

function LoginGeneric({ children }: { children: ReactNode }) {
  const [buttonName, setButtonName] = useState("Login / Sign Up");

  return (
    <>
      <NameContext.Provider value={{ buttonName, setButtonName }}>
        {children}
      </NameContext.Provider>
    </>
  );
}
export default LoginGeneric;
