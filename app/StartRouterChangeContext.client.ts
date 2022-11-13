"use client";

import { createContext } from "react";

const StartRouterChangeContext = createContext<() => void>(() => {});

export default StartRouterChangeContext;
