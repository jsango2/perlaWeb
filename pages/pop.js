// import React from "react";
// import { graphql } from "gatsby";
import Layout from "../components/layout.js";
// import Seo from "../components/seo";
import Head from "next/head";
import { createContext, useContext, useEffect, useState } from "react";

import useWindowSize from "../components/helper/usewindowsize.js";

import AppContext from "../components/AppContext.js";

import Script from "next/script";
export default function IndexPage() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://www.popcar.hr/2022/index.php?controller=pjFront&action=pjActionLoad";
    script.async = true;
    script.type = "text/javascript";
    var body = document.getElementById("demo");

    body.appendChild(script);

    console.log(script);
    return () => {
      body.removeChild(script);
    };
  }, []);

  return (
    <Layout>
      <Head>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </Head>
      <div
        id="demo"
        style={{
          width: "100%",
          height: "auto",
          padding: "30px 0 60px 0",
          margin: "0 auto",
          maxWidth: "1440px",
        }}
      ></div>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
      />
      <link
        href="https://www.popcar.hr/2022/core/framework/libs/pj/css/pj.bootstrap.min.css"
        type="text/css"
        rel="stylesheet"
      />
      <link
        href="https://www.popcar.hr/2022/index.php?controller=pjFront&action=pjActionLoadCss"
        type="text/css"
        rel="stylesheet"
      />
      <div
        style={{ backgroundColor: "black", height: "20px", width: "100%" }}
      ></div>
    </Layout>
  );
}

// return (
//   <div className="pop">
//     <Head>
//       <meta
//         http-equiv="Content-Security-Policy"
//         content="upgrade-insecure-requests"
//       />
//     </Head>
//     <Script
//       type="text/javascript"
//       src="https://www.popcar.hr/2022/index.php?controller=pjFront&action=pjActionLoad"
//     ></Script>
//     {/* <meta http-equiv="X-UA-Compatible" content="IE=edge" /> */}
//     {/* <ScriptPop /> */}
//     <meta
//       name="viewport"
//       content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
//     />
//     <link
//       href="https://www.popcar.hr/2022/core/framework/libs/pj/css/pj.bootstrap.min.css"
//       type="text/css"
//       rel="stylesheet"
//     />
//     <link
//       href="https://www.popcar.hr/2022/index.php?controller=pjFront&action=pjActionLoadCss"
//       type="text/css"
//       rel="stylesheet"
//     />
//     <div
//       style={{ backgroundColor: "black", height: "20px", width: "100%" }}
//     ></div>
//   </div>
// );
