import { CookieOptions } from "express";
import { COOKIE_EXPIRY } from "./env.configs";

export const cookieSettings: CookieOptions =
  process.env.NODE_ENV !== "production"
    ? {
        httpOnly: true,
        maxAge: Number(COOKIE_EXPIRY),
        // maxAge: Number(COOKIE_EXPIRY),
        secure: false,
        sameSite: "strict",
        // sameSite: "strict",
        signed: true,
        priority: "high"
      }
    : {
        httpOnly: true,
        maxAge: Number(COOKIE_EXPIRY),
        // maxAge: Number(COOKIE_EXPIRY),
        secure: true,
        sameSite: "none",
        // sameSite: "none",
        signed: true,
        priority: "high"
      };

export const deleteCookieSettings: CookieOptions =
  process.env.NODE_ENV !== "production"
    ? { secure: false, sameSite: "strict", signed: true, httpOnly: true }
    : // ? { secure: false, sameSite: "strict", signed: true, httpOnly: true }
      {
        secure: process.env.NODE_ENV === "production",
        sameSite: "none",
        // sameSite: "none",
        signed: true,
        httpOnly: true
      };
