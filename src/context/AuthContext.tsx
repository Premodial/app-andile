import React, { createContext, useContext, useState, useEffect, ReactNode, FunctionComponent } from 'react';
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { loginUser } from '../services/firebaseService';

// Define the shape of our context
type AuthContextType = {
  user: User | null;               // Current authenticated user
  isLoading: boolean;              // State to track loading status
  login: (email: string, password: string) => Promise<void>; // Login function
  // Add other authentication functions like logout, signUp etc. in future
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

/**
 * AuthProvider Component: Provides authentication context to its children.
 *
 * @param children - React children components
 */
export const AuthProvider: FunctionComponent<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    
    // Observe user auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });

    // Cleanup the observer on component unmount
    return () => unsubscribe();
  }, []);

  /**
   * Login function using email and password.
   * 
   * @param email - User's email
   * @param password - User's password
   */
  const login = async (email: string, password: string) => {
    try {
      await loginUser(email, password);
      // onAuthStateChanged will handle updating the user state
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login }}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Custom hook: Provides authentication context.
 * Must be used inside an AuthProvider.
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
