import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/53c17921e0c481ce.css";
import Car from "../assets/car.jpg";

function LandingPage() {
  let navigate = useNavigate();
  const handleLoginRedirect = () => {
    navigate("/login");
  };

  const handleSignUpRedirect = () => {
    navigate("/signup");
  };

  return (
    <div class="antialiased" style={{ backgroundColor: "rgb(100,100,100)" }}>
      <div id="__next">
        <div class="flex min-h-full w-screen flex-col sm:supports-[min-height:100dvh]:min-h-[100dvh] md:grid md:grid-cols-2 lg:grid-cols-[60%_40%]">
          <div>
            <img src={Car} style={{ height: "100%" }} />
          </div>
          <div class="relative flex grow flex-col items-center justify-between bg-black px-5 py-8 text-white dark:bg-black dark:text-white sm:rounded-t-[30px] md:rounded-none md:px-6">
            <div
              class="relative flex w-full grow flex-col items-center"
              style={{ marginTop: "10%" }}
            >
              <h1
                class="text-center text-[20px] leading-[1.2] md:text-[32px] md:leading-8"
                style={{ marginBottom: "30%" }}
              >
                RENT N' DRIVE
              </h1>
              <h2 class="text-center text-[20px] leading-[1.2] md:text-[32px] md:leading-8">
                Get started
              </h2>
              <div class="mt-5 w-full max-w-[440px]">
                <div class="grid gap-x-3 gap-y-2 sm:grid-cols-2 sm:gap-y-0">
                  <button
                    class="relative flex h-12 items-center justify-center rounded-md text-center text-base font-medium bg-[#3C46FF] text-[#fff] hover:bg-[#0000FF]"
                    data-testid="login-button"
                    onClick={handleLoginRedirect}
                  >
                    <div class="relative -top-[1px]">Log in</div>
                  </button>
                  <button
                    class="relative flex h-12 items-center justify-center rounded-md text-center text-base font-medium bg-[#3C46FF] text-[#fff] hover:bg-[#0000FF]"
                    onClick={handleSignUpRedirect}
                  >
                    <div class="relative -top-[1px]">Sign up</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute left-0 right-0 top-0 z-[2]"></div>
      </div>
    </div>
  );
}

export default LandingPage;