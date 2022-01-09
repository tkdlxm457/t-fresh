import { ReactNode, Suspense } from 'react';

interface SuspenseProps {
    children: ReactNode;
}

/**
 * 
 * @param param0 children
 */
const AppSuspense: React.FC<SuspenseProps> = ({ children }) => {
    return <Suspense fallback={<></>}>{children}</Suspense>;
};

export default AppSuspense;
