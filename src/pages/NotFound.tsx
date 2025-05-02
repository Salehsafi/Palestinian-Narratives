
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex flex-col items-center justify-center px-6 py-24 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-foreground mb-6">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The page you are looking for is currently under construction or doesn't exist.
        </p>
        <Button asChild>
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
