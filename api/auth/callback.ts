import { OAuth2Client } from "google-auth-library";
import { adminAuth } from "../../lib/firebaseAdmin";

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

export default async function handler(req: any, res: any) {
  try {
    const { code } = req.query;

    if (!code) {
      return res.status(400).json({
        error: "Missing authorization code",
      });
    }

    return res.status(200).json({
      message: "Authorization code received",
      code,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
}