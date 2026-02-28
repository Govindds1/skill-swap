# SkillSwap Deployment Guide

## 1) Deploy backend (`server`) first

You can deploy the Node/Express API to Render (recommended free/easy flow):

1. Create a new **Web Service** from this GitHub repo.
2. Set **Root Directory** to `server`.
3. Build command: `npm install`
4. Start command: `npm start`
5. Add environment variables:
   - `PORT` = `10000` (or leave unset if platform injects it)
   - `MONGO_URI` = your MongoDB connection string
   - `JWT_SECRET` = strong random secret
   - `JWT_EXPIRE` = `7d`
   - `NODE_ENV` = `production`
   - `CLIENT_URL` = your Vercel frontend URL (e.g. `https://skill-swap.vercel.app`)

After deploy, copy your backend URL, for example:
- `https://skillswap-api.onrender.com`

Health check should work at:
- `https://skillswap-api.onrender.com/api/health`

---

## 2) Deploy frontend (`client`) on Vercel

### Option A: Deploy from repo root
- Keep Vercel root as repository root.
- Uses root `vercel.json` already added.

### Option B: Deploy `client` as root
- Set Vercel **Root Directory** = `client`.
- Uses `client/vercel.json` already added.

Add Vercel environment variable:
- `VITE_API_URL` = your backend URL from step 1
  - Example: `https://skillswap-api.onrender.com`

Then redeploy.

---

## 3) Verify end-to-end

1. Open frontend URL.
2. Register/Login.
3. Open browser devtools network and confirm calls go to:
   - `https://<your-backend>/api/auth/...`
4. If blocked by CORS, confirm backend `CLIENT_URL` exactly matches frontend domain.

---

## Notes

- Frontend is now configured to read `VITE_API_URL`.
- If `VITE_API_URL` is empty in local dev, requests stay relative (`/api/...`) and use Vite proxy.
