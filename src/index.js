import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate";
import Home from "./pages/Home";

//Cau hinh redux
import { Provider } from "react-redux";
import { store } from "./redux/store";
import UseStateDemo from "./pages/hooks/UseStateDemo";
import ChangeProfile from "./pages/hooks/ExUseState/ChangeProfile";
import UseEffect_DidMount from "./pages/hooks/UseEffectDemo/UseEffect_DidMount";
import UseEffect_DidUpdate from "./pages/hooks/UseEffectDemo/UseEffect_DidUpdate";
import UseEffect_UnMount from "./pages/hooks/UseEffectDemo/UseEffect_UnMount";
import ExChatDemo from "./pages/hooks/ExHookRedux/ExChatDemo";
import ExChangeFontSize from "./pages/hooks/ExHookRedux/ExChangeFontSize";
import CRUDProduct from "./pages/hooks/ExHookRedux/CRUDProduct";
import HookUseCallBack from "./pages/hooks/ExHookUseCallBack/HookUseCallBack";
import ExHookUseMemo from "./pages/hooks/ExHookUseMemo/ExHookUseMemo";
import ExHookUseRef from "./pages/hooks/ExHookUseRef/ExHookUseRef";
import ExHookFormik from "./pages/hooks/ExHookFormik/ExHookFormik";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomeTemplate />}>
            <Route index element={<Home />} />
            <Route path="use-state-demo" element={<UseStateDemo />}></Route>
            <Route
              path="use-state-change-profile"
              element={<ChangeProfile />}
            ></Route>
            <Route
              path="use-effect-did-mount"
              element={<UseEffect_DidMount />}
            ></Route>
            <Route
              path="use-effect-did-update"
              element={<UseEffect_DidUpdate />}
            ></Route>
            <Route
              path="use-effect-unmount"
              element={<UseEffect_UnMount />}
            ></Route>
            <Route path="use-redux-demo-chat" element={<ExChatDemo />}></Route>
            <Route
              path="use-redux-demo-change-fontsize"
              element={<ExChangeFontSize />}
            ></Route>
            <Route path="use-redux-crud" element={<CRUDProduct />}></Route>
            <Route path="use-callback" element={<HookUseCallBack />}></Route>
            <Route path="use-memo" element={<ExHookUseMemo />}></Route>
            <Route path="use-ref" element={<ExHookUseRef />}></Route>
            <Route path="use-formik" element={<ExHookFormik />}></Route>

            <Route path="*" element={<Navigate to="" />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </div>
);
