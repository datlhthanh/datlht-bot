import "dotenv/config";

if (!process.env.BOT_TOKEN) {
  throw new Error("Thiếu BOT_TOKEN trong file .env");
}

if (!process.env.MONGODB_URI) {
  throw new Error("Thiếu MONGODB_URI trong file .env");
}

export const withBearer = (token) =>
  token.startsWith("Bearer ") ? token : `Bearer ${token}`;

const warehouseId = process.env.WAREHOUSE_ID || "21606000";
const port = Number(process.env.PORT || 3000);

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error("PORT phải là số nguyên trong khoảng 1-65535.");
}

export const config = {
  botToken: process.env.BOT_TOKEN,
  mongodb: {
    uri: process.env.MONGODB_URI,
    database: process.env.MONGODB_DATABASE || "gxt-tantao",
    tokenKey: process.env.GHN_TOKEN_KEY || "gxt-main",
  },
  gxt: { warehouseId },
  inside: { locationId: process.env.INSIDE_LOCATION_ID || warehouseId },
};
