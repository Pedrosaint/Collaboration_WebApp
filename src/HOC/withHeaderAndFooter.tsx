import { Footer } from "./footer";
import { Header } from "./header";

const withHeaderAndFooter = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return (props: P) => (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <WrappedComponent {...props} />
      </main>
      <Footer />
    </div>
  );
};

export default withHeaderAndFooter;
