import "./styles/index.scss";

import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/provider/themeProvider";
import { AppRouter } from "./provider/router";
import { Navbar } from "widgets/navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense } from "react";
// import { useTranslation } from "react-i18next";
// import { Sidebar } from "widgets/Sidebar";

// const Component = () => {};

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        {/* <Component /> */}
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
      {/* <button onClick={toggleTheme}>cahange theme</button> */}
    </div>
  );
};

export default App;
