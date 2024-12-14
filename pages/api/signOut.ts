import { deleteCookie } from "cookies-next";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ ok: true ,url:string }>
) { 
  deleteCookie("cmu-entraid-example-token", {
    req,
    res,
    path:"/",
    //change to your hostname in production
    domain: "localhost",
  });
  //logout_url for logout session from EntraID and set logout redirect url
  const logout_url = process.env.LOGOUT_URL as string;
  return res.json({ ok: true, url:logout_url });
}
