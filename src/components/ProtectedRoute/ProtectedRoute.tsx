import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { PropsWithChildren } from "react";
import { auth } from "../../firebase";
import paths from "../../paths/paths";

const ProtectedRoute = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [user, isLoading] = useAuthState(auth);

  if (!user && !isLoading) {
    return <Navigate to={paths.home} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
