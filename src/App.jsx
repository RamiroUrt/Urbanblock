import { lazy, Suspense } from "react";
import Home from "./views/Home"
import Loader from "./components/Loader/Loader";

const LazyHome = lazy(() => import("./views/Home"));

function App() {

  return (
    <>
      <Suspense fallback={<Loader />}>
        <LazyHome />
      </Suspense>
    </>
  )
}

export default App
